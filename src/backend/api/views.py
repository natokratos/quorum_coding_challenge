from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
import csv
import io

class CSVUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        file_obj = request.FILES['file']
        data = file_obj.read().decode('utf-8')
        csv_reader = csv.DictReader(io.StringIO(data))
        rows = [row for row in csv_reader]
        return Response({'rows': rows})