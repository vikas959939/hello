import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  ngOnInit(): void {
  }

  arrData = [
    {
      'name':'manchurian',
      'description':'The creation of Chicken Manchurian is in fact credited to Nelson Wang of China Garden who introduced Manchurian to Mumbai in 1975.',
      'category':'chinease',
      'image':'assets/manchurian.webp'
    },
    {
      'name':'Spring Rolls',
      'description':'The Chinese call it Chūn Juǎn and are actually Cantonese-style dumplings made for welcoming spring. But here in India, they are fried golden, loaded with vegetables juliennes and served often as party snacks.',
      'category':'chinease',
      'image':'assets/roll.jpg'
    },

    {
      'name':' Chowmein',
      'description':'In China, chowmein is referred to as chāu-mèing and is basically a portion of boiled noodles topped with greens, scrambled eggs and soya sauce. But in India, it’s pan fried, really spicy and a favourite in every household.',
      'category':'chinease',
      'image':'assets/chow.webp'
    },

    {
      'name':' Chole Bhature',
      'description':'Mouth-watering meal straight from the Punjabi kitchen - garma garam bhature with chickpeas cooked in assorted spices.',
      'category':'north',
      'image':'assets/chhole.webp'
    },

    {
      'name':' Malai ki Kheer',
      'description':'It is a perfect dessert after a filling meal.  Rice kheer made with condensed milk, khoya, cream and nuts. A bowl of kheer is the ultimate winner when it comes to Indian desserts',
      'category':'north',
      'image':'assets/kheer.jpg'
    },

    {
      'name':'Dahi Bhalla',
      'description':'The most loved street snack of India, particularly North India. Dahi Bhalla can also be served as a chilled snack or a starter during festive occasions like Diwali or Navratri.',
      'category':'north',
      'image':'assets/dahi.webp'
    },

    {
      'name':'Dosa',
      'description':'ice and wheat are the top two grains consumed by Indians, with rice topping the list. Indians have taken this humble grain and transformed it into a plethora of sweet',
      'category':'South Indian',
      'image':'assets/dosa.webp'
    },

    {
      'name':'Idli',
      'description':'Idli or idly is a type of savory rice cake, originating from the Indian subcontinent, popular as a breakfast food in Southern India and in Sri Lanka.',
      'category':'South Indian',
      'image':'assets/idli.webp'
    },

    {
      'name':'Appam',
      'description':'Appam is a type of pancake, originating from South India, made with fermented rice batter and coconut milk, common in Kerala, Sri Lanka, and Tamil Nadu.',
      'category':'South Indian',
      'image':'assets/appam.webp'
    },
  ]

  filter(category:string){
    this.filterCategory = this.arrData.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  
}