class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class ConjuredItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

class LegendaryItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      const sellByDays = item.sellIn;
      
      switch (true) {
        case item.name.includes('Aged Brie') :
          const agedBrie = item;
          agedBrie.quality += sellByDays <= 0 ? 2 : 1;
          break;
        case item.name.includes('Backstage passes') : 
          const backstagePasses = item;
          
          if (sellByDays <= 0) {
            backstagePasses.quality = 0;
          } else {
            backstagePasses.quality +=
              sellByDays <= 5 ? 3 :
              sellByDays <= 10 ? 2 :
              1
          }
          break;
        default :
          if (item.quality > 0) {
            item.quality -= (item instanceof ConjuredItem ? 2 : 1) * (sellByDays <= 0 ? 2 : 1);
          }
      }
      if (item.quality > 50) {
        item.quality = 50;
      }
      if (item instanceof LegendaryItem) {
        item.quality = 80;
      }
    })

    return this.items;
  }
}

module.exports = {
  Item,
  ConjuredItem,
  LegendaryItem,
  Shop
}
