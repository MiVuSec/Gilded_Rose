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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const sellByDays = item.sellIn;
      
      switch (true) {
        case item.name.includes('Aged Brie') :
          const agedBrie = item;
          agedBrie.quality += sellByDays <= 0 ? 2 : 1;
          if (agedBrie.quality > 50) {
            agedBrie.quality = 50;
          }
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
          if (backstagePasses.quality > 50) {
            backstagePasses.quality = 50;
          }
          break;
        default :
          if (item.quality > 0) {
            item.quality -= (item instanceof ConjuredItem ? 2 : 1) * (sellByDays <= 0 ? 2 : 1);
            if (item.quality > 50) {
              item.quality = 50;
            }
          }
          if (item instanceof LegendaryItem) {
            item.quality = 80;
          }
      }

      // if (this.items[i].name != 'Aged Brie' &&
      //   this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' &&
      //   !this.items[i].name instanceof ConjuredItem) {
      //   if (this.items[i].quality > 0) {
      //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      //       this.items[i].quality = this.items[i].quality - 1;
      //     }
      //   }
      // } else {
      //   if (this.items[i].quality < 50) {
      //     this.items[i].quality = this.items[i].quality + 1;
      //     if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      //       if (this.items[i].sellIn < 11) {
      //         if (this.items[i].quality < 50) {
      //           this.items[i].quality = this.items[i].quality + 1;
      //         }
      //       }
      //       if (this.items[i].sellIn < 6) {
      //         if (this.items[i].quality < 50) {
      //           this.items[i].quality = this.items[i].quality + 1;
      //         }
      //       }
      //     }
      //   }
      // }
      // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      //   this.items[i].sellIn = this.items[i].sellIn - 1;
      // }
      // if (this.items[i].sellIn < 0) {
      //   if (this.items[i].name != 'Aged Brie') {
      //     if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      //       if (this.items[i].quality > 0) {
      //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      //           this.items[i].quality = this.items[i].quality - 1;
      //         }
      //       }
      //     } else {
      //       this.items[i].quality = this.items[i].quality - this.items[i].quality;
      //     }
      //   } else {
      //     if (this.items[i].quality < 50) {
      //       this.items[i].quality = this.items[i].quality + 1;
      //     }
      //   }
      // }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  ConjuredItem,
  LegendaryItem,
  Shop
}
