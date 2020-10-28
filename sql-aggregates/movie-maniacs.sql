select "customers"."firstName", "customers"."lastName", sum("payments"."amount")
from "customers"
join "payments" using ("customerId")
group by "firstName", "lastName"
order by "sum" desc;
