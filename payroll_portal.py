"""In-platform payroll entry. No external Site URL or browser API is required."""

def render_payroll_portal():
    from payroll_native.ui import render_payroll_center
    render_payroll_center()
