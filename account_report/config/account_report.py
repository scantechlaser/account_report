from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Sanket"),
			"items": [
				{
					"type": "doctype",
					"name": "Test",
					"description": _("For Test.")
				},
				{
					"type": "doctype",
					"name": "overtime",
					"description": _("For Test.")
				}
			]

		},
		{
			"label": _("Accounts Report"),
			"items": [
				{
					"type": "report",
					"name":"sanket",
					"doctype": "Test",
					"is_query_report": True,
				},
			]
		},
		{
			"label": _("Help"),
			"icon": "fa fa-facetime-video",
			"items": [
				{
					"type": "help",
					"label": _("Chart of Accounts"),
					"youtube_id": "DyR-DST-PyA"
				},
				{
					"type": "help",
					"label": _("Opening Accounting Balance"),
					"youtube_id": "kdgM20Q-q68"
				},
				{
					"type": "help",
					"label": _("Setting up Taxes"),
					"youtube_id": "nQ1zZdPgdaQ"
				}
			]
		}
	]
