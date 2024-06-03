from django.db import models

# Create your models here.
class Risk(models.Model):
    MALE = 1
    FEMALE = 0
    SEX_CHOICES = (
        (MALE, 'm'),
        (FEMALE, 'f')
    )

    HISPANIC = 0
    LATINO = 1
    NATIVE_INDIAN = 2
    OTHERS = 3
    PACIFICA = 4
    WHITE_EUROPEAN = 5
    ASIAN = 6
    BLACK = 7
    MIDDLE_EASTERN = 8
    MIXED = 9
    SOUTH_ASIAN = 10

    ETHNICITY_CHOICES = (
        (HISPANIC, 'Hispanic'),
        (LATINO, 'Latino'),
        (NATIVE_INDIAN, 'Native Indian'),
        (OTHERS, 'Others'),
        (PACIFICA, 'Pacifica'),
        (WHITE_EUROPEAN, 'White European'),
        (ASIAN, 'Asian'),
        (BLACK, 'Black'),
        (MIDDLE_EASTERN, 'Middle Eastern'),
        (MIXED, 'Mixed'),
        (SOUTH_ASIAN, 'South Asian')
    )

    YES_NO_CHOICES_FIRST = (
        (0, 'Yes'),
        (1, 'No')
    )
    YES_NO_CHOICES = (
        (1, 'Yes'),
        (0, 'No')
    )

    Age_Mons = models.IntegerField()
    Gender = models.IntegerField(choices=SEX_CHOICES)
    A1 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A2 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A3 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A4 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A5 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A6 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A7 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A8 = models.IntegerField(choices=YES_NO_CHOICES_FIRST)
    A9 = models.IntegerField(choices=YES_NO_CHOICES)
    Ethnicity = models.IntegerField(choices=ETHNICITY_CHOICES)
    Jaundice = models.IntegerField(choices=YES_NO_CHOICES)
    ASD_history = models.IntegerField(choices=YES_NO_CHOICES)

    # def __str__(self):
    #     return f'Risk Assessment for Child Age {self.Age_Mons} months'


