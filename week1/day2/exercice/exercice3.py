brand={
    "name": "Zara",
"creation_date": 1975,
"creator_name": "Amancio Ortega Gaona",
"type_of_clothes":( "men", "women", "children", "home"),
"international_competitors": ("Gap", "H&M"," Benetton"),
"number_stores": 7000,
"major_color":{"France":"blue", 
   " Spain":" red", 
    "US": ["pink", "green"]
}}
#changer number store
brand['number_stores']=2
#print message
type_of_clothes=brand['type_of_clothes']
print(f"we have all u need for{ type_of_clothes[0]} and {type_of_clothes[1] }and {type_of_clothes[2] }and{type_of_clothes[3] }")
#add new key 
brand["contry_creation"]="spain"
# add desigual to international comp...
list=list(brand["international_competitors"])
list.append("desigul")
brand["international_competitors"] = tuple(list)
#delete date creation 
del brand["creation_date"]
#print last item
print(list[-1])
#print color US
color=brand['major_color']
color1=color["US"]
print ("the color of USIS :" ,str(color1))
# nombre of keys
nombre_of_keys=len(brand)
print(nombre_of_keys)
#print keys
for key in brand:
    print(key)
#add other dic
more_on_zara={"creation_date":1999,
             "nombre_store":10}
brand.update(more_on_zara)


print(brand)


