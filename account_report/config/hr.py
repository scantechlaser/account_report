from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("Over Time"),
			"items": [
				
				{
					"type": "report",
					"name": "Account Ledger Report In Coulmn",
					"doctype": "account_report",
					"is_query_report": True,
					"label": _("Monthly Overtime Report"),
					"color": "green",
					"icon": "octicon octicon-file-directory"
				}
			]

		}

	]