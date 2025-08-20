# Day 01 - Python OOP Example: Microwave Class

class Microwave:
    def __init__(self, brand, power_level=0):
        self.brand = brand
        self.power_level = power_level
        self.is_on = False
    
    def turn_on(self):
        if not self.is_on:
            self.is_on = True
            return f"{self.brand} Microwave is now ON."
        return f"{self.brand} Microwave is already ON."
    
    def turn_off(self):
        if self.is_on:
            self.is_on = False
            return f"{self.brand} Microwave is now OFF."
        return f"{self.brand} Microwave is already OFF."
    
    def run(self, seconds):
        if self.is_on:
            return f"{self.brand} Microwave is heating for {seconds} seconds at power level {self.power_level}."
        return f"Can't run. {self.brand} Microwave is OFF."

# Example usage
if __name__ == "__main__":
    my_microwave = Microwave("Bosch", power_level=5)
    print(my_microwave.turn_on())
    print(my_microwave.run(30))
    print(my_microwave.turn_off())
