import heapq
from typing import List
from math import ceil


class Element:
    def __init__(self, eDamage, eHealth, index):
        self.eDamage = eDamage
        self.eHealth = eHealth
        self.index = index

    def __gt__(self, other):
        if self.eDamage == other.eDamage:
            return self.eHealth > other.eHealth
        return self.eDamage < other.eDamage
    
def minimum_damage(attackPower: int, enemyDamage: List[int], enemyHealth: List[int]) -> int:
    total = sum(enemyDamage)
    allTask = []
    ans = 0
    for i in range(len(enemyDamage)):
        allTask.append(Element(enemyDamage[i], enemyHealth[i], i))
    
    heapq.heapify(allTask)

    while allTask:
        element = heapq.heappop(allTask)
        ans += ceil(element.eHealth / attackPower) * total
        total -= element.eDamage

    return ans

print(minimum_damage(4, [1,2,3,4], [4,5,6,8]))
print(minimum_damage(1, [1,1,1,1], [1,2,3,4]))
 
    