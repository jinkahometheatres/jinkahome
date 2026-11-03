from rest_framework import viewsets
from .models import Category, Product, Specialty, GalleryImage, Review
from .serializers import CategorySerializer, ProductSerializer, SpecialtySerializer, GalleryImageSerializer, ReviewSerializer
class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'

class SpecialtyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Specialty.objects.all()
    serializer_class = SpecialtySerializer

class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    # Only return approved reviews
    queryset = Review.objects.filter(is_approved=True)
    serializer_class = ReviewSerializer
