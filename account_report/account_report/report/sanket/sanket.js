// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.require("assets/erpnext/js/financial_statements.js", function() {
	frappe.query_reports["sanket"] = {

onload: function(report) {
		// dropdown for links to other financial statements
		erpnext.financial_statements.filters = get_filters()

		report.page.add_inner_button(__("Balance Sheet"), function() {
			var filters = report.get_values();
			frappe.set_route('query-report', 'Balance Sheet', {company: filters.company});
		}, __('Financial Statements'));
		report.page.add_inner_button(__("Profit and Loss"), function() {
			var filters = report.get_values();
			frappe.set_route('query-report', 'Profit and Loss Statement', {company: filters.company});
		}, __('Financial Statements'));
		report.page.add_inner_button(__("Cash Flow Statement"), function() {
			var filters = report.get_values();
			frappe.set_route('query-report', 'Cash Flow', {company: filters.company});
		}, __('Financial Statements'));
	},
		"filters": [{
					"fieldname": "company",
					"label": __("Company"),
					"fieldtype": "Link",
					"options": "Company",
					"default": frappe.defaults.get_user_default("Company"),
					"reqd": 1
				},
				{
					"fieldname": "fiscal_year",
					"label": __("Fiscal Year"),
					"fieldtype": "Link",
					"options": "Fiscal Year",
					"default": frappe.defaults.get_user_default("fiscal_year"),
					"reqd": 1,
					"on_change": function(query_report) {
						var fiscal_year = query_report.get_values().fiscal_year;
						if (!fiscal_year) {
							return;
						}
						frappe.model.with_doc("Fiscal Year", fiscal_year, function(r) {
							var fy = frappe.model.get_doc("Fiscal Year", fiscal_year);
							frappe.query_report_filters_by_name.from_date.set_input(fy.year_start_date);
							frappe.query_report_filters_by_name.to_date.set_input(fy.year_end_date);
							query_report.trigger_refresh();
						});
					}
				},
				{
					"fieldname": "periodicity",
					"label": __("Periodicity"),
					"fieldtype": "Select",
					"options": [
						{ "value": "Monthly", "label": __("Monthly") },
						{ "value": "Quarterly", "label": __("Quarterly") },
						{ "value": "Half-Yearly", "label": __("Half-Yearly") },
						{ "value": "Yearly", "label": __("Yearly") }
					],
					"default": "Monthly",
					"reqd": 1
				},
			{
						"fieldname": "from_date",
						"label": __("From Date"),
						"fieldtype": "Date",
						"default": frappe.defaults.get_user_default("year_start_date"),
					},
					{
						"fieldname": "to_date",
						"label": __("To Date"),
						"fieldtype": "Date",
						"default": frappe.defaults.get_user_default("year_end_date"),
					},
				{
				"fieldname": "accumulated_values",
				"label": __("Accumulated Values"),
				"fieldtype": "Check",
				"default": 1
			}
			]
			}
	
});

