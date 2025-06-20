def make_shirt(size, text):
  print(f"Creating a size {size} shirt with the message: '{text}'.")


make_shirt("medium", "hello world!")
make_shirt("small", "python")



def make_shirt(size="large", text="I love Python"):
  print(f"Creating a {size} shirt with the message: '{text}'.")

# Step 5: Call the Function with Default and Custom Values
print("\n--- Function Calls with Default Values ---")


make_shirt()
make_shirt("medium")
make_shirt("small", "Coding is Fun!")
make_shirt(size="small", text="Hello!")