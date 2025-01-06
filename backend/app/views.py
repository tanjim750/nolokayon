from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from django.utils import timezone

from app import models
from app import serializers

import time, json

from .mail_sender import mail_sender

class VisitorView(View):
    def get(self, request, visitor_id):
        try:
            visitor = models.Visitor.objects.filter(visitor_id=visitor_id).first()

            if visitor is None:
                return JsonResponse({
                    "ok": False,
                    "message": "Not found",
                },status=404)
            
            return JsonResponse(serializers.VisitorSerializer(visitor,many=True).data)
        except:
            return JsonResponse({
                "ok": False,
                "message": "An error occurred. Please try again",
            },status=501)
    
    def post(self,request,visitor_id):
        try:
            visitor,created = models.Visitor.objects.get_or_create(visitor_id=visitor_id)

            if created:
                return JsonResponse({
                    "visitors": serializers.VisitorSerializer(visitor).data
                }, status=201)

            visitor.visits += 1
            visitor.save()
            return JsonResponse({
                    "visitors": serializers.VisitorSerializer(visitor).data
                })

        except Exception as e:
            return JsonResponse({
                "ok": False,
                "message": "An error occurred. Please try again",
            },status=501)

        
class Home(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            header = models.Header.objects.first()
            hero = models.Hero.objects.first()
            banners = models.Banner.objects.all()
            contact = models.Contact.objects.first()
            products = models.Product.objects.all().order_by("-created_at")
            categories = models.Category.objects.all().order_by("-id")


            self.context["header"] = serializers.HeaderSerializer(header).data if header else None
            self.context["banners"] = serializers.BannerSerializer(banners, many=True).data if banners else None
            self.context["hero"] = serializers.HeroSerializer(hero).data if hero else None
            self.context["contact"] = serializers.ContactSerializer(contact).data if contact else None
            self.context["products"] = serializers.ProductSerializer(products, many=True).data if products else None
            self.context["categories"] = serializers.CategorySerializer(categories, many=True).data

            return JsonResponse(self.context, status=200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)

class AboutView(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            header = models.Header.objects.first()
            about = models.About.objects.first()

            self.context["header"] = serializers.HeaderSerializer(header).data if header else None
            self.context["about"] = serializers.AboutSerializer(about).data if about else None
            
            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)
        
class ContactView(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            header = models.Header.objects.first()
            contact = models.Contact.objects.first()

            self.context["header"] = serializers.HeaderSerializer(header).data if header else None
            self.context["contact"] = serializers.ContactSerializer(contact).data if contact else None

            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)

class FooterView(View):
    def __init__(self):
        self.context = {

        }

    def get(self, request, *args, **kwargs):
        try:
            products = models.Product.objects.all().order_by("-created_at")
            contact = models.Contact.objects.first()

            self.context["footer"] = serializers.ContactSerializer(contact).data if contact else None
            self.context["products"] = serializers.ProductSerializer(products, many=True).data if products else None
            
            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)

class ProductView(View):
    def __init__(self):
        self.context = {}

    def get(self, request, *args, **kwargs):
        try:
            products = models.Product.objects.all().order_by("-created_at")

            self.context["products"] = serializers.ProductSerializer(products, many=True).data if products else None
            return JsonResponse(self.context, status=200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)
        
class DiscountView(View):
    def __init__(self, **kwargs):
        self.context = {}

    def get(self,request):
        try:
            coupons = models.Coupon.objects.all()
            self.context["coupons"] = serializers.CouponSerializer(coupons,many=True).data

            return JsonResponse(self.context, status= 200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)
    
    def post(self,request):
        self.context = {}
        
        data = json.loads(request.body)
        code = data.get("coupon",None)
        product_id = data.get("product_id",None)

        if not code and not product_id:
            self.context["ok"] = False
            self.context["message"] = "Missing required parameters."
            return JsonResponse(self.context, status= 400)
        
        coupon = models.Coupon.objects.filter(code=code).first()
        product = models.Product.objects.filter(id=product_id).first()

        if not coupon:
            self.context["ok"] = False
            self.context["message"] = "Invalid coupon code."
            return JsonResponse(self.context, status= 404)
        
        if not product:
            return JsonResponse({
                "ok": False,
                "message": "Invalid product."
            }, status=404)

        # Check if the coupon is active and within the validity period
        now = timezone.now()
        if not coupon.is_active or not (coupon.valid_from <= now <= coupon.valid_until):
            return JsonResponse({
                "ok": False,
                "message": "This coupon is expired."
            }, status=400)

        # Check if the coupon applies to the product's category or all products
        if coupon.category and product.category != coupon.category:
            return JsonResponse({
                "ok": False,
                "message": "This coupon does not apply to the selected product."
            }, status=400)

        # If all checks pass, return success response 
        product_price = product.discount_price if product.discount_price else product.price
        return JsonResponse({
            "ok": True,
            "message": "Congratulations you got "+str(coupon.discount_percentage)+"% off.",
            "discount_percentage": coupon.discount_percentage,
            "discount_price": product_price - (product_price*(coupon.discount_percentage/100)),
            "off_price": (product_price*(coupon.discount_percentage/100))
        }, status=200)

class ProductDetails(View):
    def __init__(self):
        self.context = {}

    def get(self, request, id):
        try:
            product = models.Product.objects.filter(id=id).first()
            
            if not product:
                self.context["ok"] = False
                self.context["message"] = "Product not found. Try with valid product"
                return JsonResponse(self.context, status= 404)
            
            product.hits += 1
            product.save()

            self.context["ok"] = True
            self.context["product"] = serializers.ProductSerializer(product).data

            return JsonResponse(self.context, status=200)
        except:
            self.context["ok"] = False
            self.context["message"] = "An error occurred. Please try again"
            return JsonResponse(self.context, status= 501)
        
class CheckoutView(View):
    def get(self,request):
        try:
            visitor_id = request.GET.get('visitor_id',None)

            if visitor_id is None:
                return JsonResponse({
                    "ok": False,
                    "message": "Missing required parameter"
                }, status=400)
            
            items = models.CheckoutItem.objects.filter(visitor__visitor_id=visitor_id).order_by("-id")
            return JsonResponse({
                "items":serializers.CheckoutItemSerializer(items,many=True).data,
            },status=200)
        
        except:
            return JsonResponse({
                "ok": False,
                "message": "An error occurred. Please try again",
            },status=501)
    
    def post(self,request):
        try:
            body = json.loads(request.body)

            print(body)
            fname = body.get("fname",None)
            lname = body.get("lname",None) 
            address1 = body.get("address1",None) 
            address2 = body.get("address2",None) 
            district = body.get("district",None) 
            upazila = body.get("upazila",None) 
            number = body.get("phone",None) 
            email = body.get("email",None) 
            visitor_id = body.get("visitor_id",None)
            product_id = body.get("product_id",None)
            coupon_code = body.get("coupon_code",None)
            quantity = int(body.get("quantity",1))
            order_note = body.get("order_note",None) 
            other_details = int(body.get("other_details",0))


            if not (fname and lname and address1 and district 
                    and upazila and number and visitor_id and product_id ):
                return JsonResponse({
                    "ok": False,
                    "message": "Missing required parameter"
                }, status=400)


            defaults = {
                "fname": fname,
                "lname": lname,
                "number": number,
                "email": email,
                "address1": address1,
                "address2": address2,
                "district": district,
                "upazila": upazila
            }

            product = models.Product.objects.filter(id=product_id).first()
            if product is None:
                return JsonResponse({
                        "ok": False,
                        "message": "Sorry!! Product not found"
                    }, status=400)

            visitor, created = models.Visitor.objects.get_or_create(
                visitor_id=visitor_id, 
                defaults=defaults
            )

            coupon = models.Coupon.objects.filter(code=coupon_code).first()
            
            if not created:
                visitor.fname = defaults["fname"]
                visitor.lname = defaults["lname"]
                visitor.number = defaults["number"]
                visitor.email = defaults["email"]
                visitor.address1 = defaults["address1"]
                visitor.address2 = defaults["address2"]
                visitor.district = defaults["district"]
                visitor.upazila = defaults["upazila"]
                visitor.save()

            product_price = product.discount_price*quantity if product.discount_price else product.price*quantity
            get_other_details = f"{product.other_details.name}:{product.other_details.details[other_details]}" if product.other_details else None

            checkout = models.Checkout.objects.create(
                order_note = order_note,
                total_price= (float(product_price) + product.delivery_cost),
                final_price= (float(product_price) + product.delivery_cost),
                visitor=visitor,
                coupon = coupon,
                quantity= quantity,
                product = product,
                other_details = get_other_details
            )
        
            checkout.apply_coupon()
            models.CheckoutItem.objects.create(visitor = visitor,checkout=checkout, product=product, quantity=quantity, price=checkout.final_price)

            #send mail 
            to = ["ourbusiness029@gmail.com","supports@nolokayon.shop"]
            customer_mail = email
            from_ = "quinnirene701@gmail.com"
            context = serializers.CheckoutSerializer(checkout).data
            context["customer"] = False
            subject = "New Order Details by "+fname+" "+lname
            template = "email_template.html"
            mail_sender(context,to,subject,from_,template)

            if customer_mail is not None:
                subject = "Your Order Has been received."
                context["customer"] = True
                mail_sender(context,[customer_mail],subject,from_,template)

            # return http response
            return JsonResponse({
                "details": serializers.CheckoutSerializer(checkout).data
            },status=200)
        
        except Exception as e:

            return JsonResponse({
                "ok": False,
                "message": str(e),
            },status=501)

class OrderDetailsView(View):
    def get(self, request, order_id):
        order = models.CheckoutItem.objects.filter(checkout__order_id=order_id).first()

        if not order:
            return JsonResponse({
                "ok": False,
                "message": "Sorry!! Invalid order number."
            }, status=400)

        return JsonResponse(serializers.CheckoutItemSerializer(order).data, status=200)