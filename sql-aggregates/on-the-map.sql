select count("cities".*) as "city count", "countries"."name"
from "countries"
join "cities" using ("countryId")
group by "countries"."name";
