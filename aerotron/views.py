import json

from django.http import HttpResponse
from django.views import View


class AerotronView(View):
    info = {
        "pesan": "Layanan Aerotron"
    }

    def get(self, req):
        return HttpResponse(
            json.dumps(self.info)
        )
