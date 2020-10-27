select "line1", "cityId", "name", "district"
  from "addresses"
  join "cities" using ("cityId");
