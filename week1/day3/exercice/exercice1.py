class cat():
      def __init__(self,name,age):
        self.name=name
        self.age=age
       
      def oldest_cat(cat1,cat2,cat3):
        oldest = cat1
        if cat2.age>oldest.age:
             oldest=cat2
        elif cat3.age>oldest.age:
             oldest=cat3
        else:
             oldest.age=cat1.age
        return oldest
cat1=cat("jilo",3)
cat2=cat("tom",2)
cat3=cat("lilo",1)
oldest=cat.oldest_cat(cat1,cat2,cat3)
print("oldest cat is :",oldest.name ,"and is :",oldest.age," years old")

