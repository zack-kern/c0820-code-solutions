select count("categories".*) as "numberOfCategories",
    "categories"."name" as "category"
    from "actors"
    join "castMembers" using ("actorId")
    join "filmCategory" using ("filmId")
    join "categories" using ("categoryId")
    where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
    group by "category"
