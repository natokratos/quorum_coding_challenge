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
        reader = csv.reader(io.StringIO(data))
        rows = [row for row in reader]
        # rows[0] is header
        return Response({'header': rows[0], 'rows': rows[1:]})