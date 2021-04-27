from django.db import models
from django.conf import settings

# Create your models here.
from django.utils import timezone
from django.urls import reverse
from django.db.models import Avg, Count


class PublishedManager(models.Manager):
	def get_queryset(self):
		return super(PublishedManager,
			self).get_queryset().filter(status='published')


class Movie(models.Model):
	STATUS_CHOICES = (
		('draft', 'Draft'),
		('published', 'Published'),
)
	title = models.CharField(max_length=250)
	slug = models.SlugField(max_length=250,
		unique_for_date='publish')
	author = models.ForeignKey(settings.AUTH_USER_MODEL,
		on_delete=models.CASCADE,
		related_name='movies')
	cover_img_url = models.CharField(max_length=1000, null=True)
	body = models.TextField()
	link = models.CharField(max_length=1000, null=True)
	imdb_rating = models.DecimalField(null=True, max_digits=12, decimal_places=1)
	publish = models.DateTimeField(default=timezone.now)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	views = models.IntegerField(default=0)
	hearts = models.IntegerField(default=0)
	# categories = models.ManyToManyField('Category', related_name='categories')
	# like     = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name="likes")
	status = models.CharField(max_length=10,
		choices=STATUS_CHOICES,
		default='draft')

	class Meta:
		ordering = ('-publish',)
	def __str__(self):
		return self.title

	def get_absolute_url(self):
		return reverse('movie:movie-detail',

						args=[self.publish.year,
						self.publish.month,
						self.publish.day, self.slug])

	def get_api_like_url(self):
		return reverse("movie:like_api", kwargs={"slug": self.slug})

	objects = models.Manager() # The default manager.	
	published = PublishedManager() # Our custom manager.