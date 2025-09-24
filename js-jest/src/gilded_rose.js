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
      const quality = this.items[i].quality;
      const sellByDays = this.items[i].sellIn;
      switch (this.items[i].name) {
        case 'Aged Brie' :
          const agedBrie = this.items[i];
          agedBrie.quality++;
          if (agedBrie.quality > 50) {
            agedBrie.quality = 50;
          }
          return this.items;
        case 'Backstage passes to a TAFKAL80ETC concert' : 
          const backstagePasses = this.items[i];
          //backstagePasses.quality += sellByDays < 0 ? 
          if (sellByDays < 0) {
            backstagePasses.quality = 0;
          } else if (sellByDays <= 5) {
            backstagePasses.quality += 3;
          }else if (sellByDays >= 10) {
            backstagePasses.quality += 2;
          }
          if (backstagePasses.quality > 50) {
            backstagePasses.quality = 50;
          }
          return this.items;
        default :
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1;
          }
      }

      if (this.items[i].name != 'Aged Brie' &&
        this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' &&
        !this.items[i].name instanceof ConjuredItem) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
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
