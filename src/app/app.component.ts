import { animation } from '@angular/animations';
import { Component, AfterViewInit, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'https://pixy.org/src/21/219269.jpg';

  arrayElements!: Array<Array<any>>;
  ElementsTitleStyle!: string;
  ElementsInfoStyle!: string;
  arrayUsersElements!: Array<string>;
  arrayOtherElements!: Array<Array<string>>;
  countNumImage!: number;
  subscribe!: Subscription;
  countElementClick!: number;
  arrayNames!: Array<string>;

  subscriptionCharact!: Subscription;
  arrayCharacters!: Array<Array<string>>;
  handleNumCharact!: number;
  handleNameCharactS!: string;
  handleInfoCharactS!: string;
  handleStyleCharactS!: string;
  numHandleCon!: number;
  
  objectiveImageF!: Array<string>;
  objectiveName!: string;
  objectiveInfo!: string;
  objectiveLink!: any;
  objectiveNumCon!: number;

  srcConditionBool: boolean = true;
  srcConditionToText: boolean = false;
  scrWidth:any;

  elementWidthCon!: boolean;
  elementName!: Array<string>;
  elementSelected!: number;

  imageOWidthCon!: boolean;
  arrayObjectData!: Array<Array<string>>;
  linkObjective: string = "?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=1";

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.scrWidth = window.innerWidth;
    if(this.scrWidth <= 650){
      if(this.srcConditionBool){
        this.srcConditionBool = false;
      }
    }else{
      if(!this.srcConditionBool){
        this.srcConditionBool = true;
      }
    }

    if(window.innerWidth <= 1267){
      if(!this.srcConditionToText){
        this.srcConditionToText = true;
      }
    }else{
      if(this.srcConditionToText){
        this.srcConditionToText = false;
      }
    }


    if(window.innerWidth > 767){
      if(!this.elementWidthCon){
        this.elementWidthCon = true;
      }
    }else{
      if(this.elementWidthCon){
        this.elementWidthCon = false;
      }
    }

    if(window.innerWidth > 991){
      this.imageOWidthCon = true;
    }else{
      this.imageOWidthCon = false;
    }
  }

  constructor(private http: HttpClient, private dom: DomSanitizer, private readonly changeDetectorRef: ChangeDetectorRef){}


  ngOnInit(): void {
    this.handleNumCharact = 0;
    this.elementSelected = 0;
    this.numHandleCon = 0;
    this.objectiveNumCon = 0;

    
    this.arrayElements = new Array<Array<any>>(
    ['/assets/elements/flameF.png', 'Flame', 'Flame Style', "Flame Breathing is a Breathing Style that mimics flames and replicates it with the user's movements, techniques and abilities. Most, if not all, known techniques and forms involve extremely powerful singular strikes who burn their opponents, initiated from a high stance. Users of Flame Breathing also visualize themselves seemingly creating and manipulating fire when unleashing its techniques.", 
      ['Shinjuro Rengoku', 'Kyojuro Rengoku', 'Mitsuri Kanroji (Formerly)'], [['/assets/elements/flame_love.png', 'Love']]], 
    ['/assets/elements/waterF.png', 'Water', 'Water Style', "Water Breathing is a Breathing Style that mimics water, specifically the flow, flexibility and adaptability of the liquid and replicates it with the user's movements, techniques and abilities. Most, if not all, known techniques involve the user bending their body, arm and weapon in a fluid motion to match the movements of flowing water. Users also visualize themselves seemingly creating and manipulating water when unleashing its techniques.",
      ['Sakonji Urokodaki (Cultivator)', 'Giyu Tomioka', 'Sabito', 'Makomo', 'Tanjiro Kamado', 'Aoi Kanzaki'], 
      [['/assets/elements/water_flower.png', 'Flower'], ['/assets/elements/water_serpent.png', 'Serpent'], ['/assets/elements/water_insect.png', 'Insect']]],
    ['/assets/elements/thunderF.png', 'Thunder', 'Thunder Style', "Thunder Breathing is a Breathing Style that mimics lightning, specifically swift strikes and movements akin to lightning ripping through the sky, and replicates it with the user's movements, techniques and abilities. Most, if not all, known techniques and forms involve utilizing blinding speeds and immensely fast attacks to overwhelm the enemy in an instant. Users of Thunder Breathing also visualize themselves seemingly creating and manipulating lightning and electricity when unleashing its techniques.",
      ['Jigoro Kuwajima (Cultivator)', 'Zenitsu Agatsuma', 'Kaigaku'], [['/assets/elements/thunder_sounds.png', 'Sounds']]], 
    ['/assets/elements/windF.png', 'Wind', 'Wind Style', "Wind Breathing is a Breathing Style that mimics wind, specifically powerful torrents of air and whirlwinds, and replicates it with the user's movements, techniques and abilities. Most, if not all, known techniques and forms involve purely offensive attacks, most of which utilizing rotating movements to generate swift whirlwind-like slashes that greatly increase the wielder's striking range or utilizing the air around them to deliver sharp sickle-shaped attacks. Users of Wind Breathing also visualize themselves seemingly creating and manipulating wind when unleashing its techniques.",
      ['Sanemi Shinazugawa', 'Masachika Kumeno'], [['/assets/elements/wind_mist.png', 'Mist']]]);

    this.arrayCharacters = new Array<Array<string>>(['/assets/characters/charact1.png', 'Kamado Tanjiro', 'Breathing Hybridization (Water and Sun)', "Tanjiro Kamado (竈門かまど 炭たん治じ郎ろう Kamado Tanjirō?) is the main protagonist of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer in the Demon Slayer Corps, who joined to find a remedy to turn his sister, Nezuko Kamado, back into a human and to hunt down and kill demons in order to protect others from suffering the same fate as him. Before he became a Demon Slayer, his entire family was slaughtered by the Demon King, Muzan Kibutsuji, while his younger sister, Nezuko, was turned into a demon as a result."], 
    ['/assets/characters/charact2.png', 'Nezuko Kamado', 'Human became a demon', "Nezuko Kamado (竈門かまど 禰ね豆ず子こ Kamado Nezuko?) is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and turned into a demon by Muzan Kibutsuji. As a demon, however, Nezuko seems to have forgotten a good portion of her memories as a human, besides those related to her family, and thus doesn't retain the exact personality she had before transformation. She is still very caring and protective towards humans who she sees as members of her family"],
    ['/assets/characters/charact3.png', "Zenitsu Agatsuma", "Channeling strength into the user's legs", "Zenitsu Agatsuma (我あが妻つま 善ぜん逸いつ Agatsuma Zen'itsu?) is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba and along with Inosuke Hashibira, a travelling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps. Zenitsu is in a constant state of fear and always cries and tries to run away at the sight of danger, claiming he wants to live a modest, normal life, instead of that of a Demon Slayer."], 
    ['/assets/characters/charact4.png', 'Inosuke Hashibira', 'Breath of the Beast sword style', "Inosuke Hashibira (嘴はし平びら 伊い之の助すけ Hashibira Inosuke?) is one of the main protagonists of Demon Slayer: Kimetsu no Yaiba and along with Zenitsu Agatsuma, a traveling companion of Tanjiro Kamado and Nezuko Kamado. He is also a Demon Slayer in the Demon Slayer Corps. Inosuke is an extremely short-tempered and proud young man who always likes to think he is the strongest fighter in a situation, constantly challenging most people he comes across and wanting others to respect and praise him for his skill."], 
    ['/assets/characters/charact5.png', 'Giyu Tomioka', 'Water Pillar Breathing style', "Giyu Tomioka (富とみ岡おか 義ぎ勇ゆう Tomioka Giyū?) is a major supporting character of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer of the Demon Slayer Corps and the current Water Hashira (水みず柱ばしら Mizu Bashira?). Giyu always wears a stoic and unbothered expression on his face. He has a reserved personality and a strong sense of justice with no tolerance towards those who don't know their own limitations and throw away their lives. It is revealed later on that Giyu suffers from an inferiority complex which he developed since his participation in the Final Selection."],
    ['/assets/characters/charact6.png', 'Shinobu Kocho', 'Water, flower and serpent style breathing', "Giyu Tomioka (富とみ岡おか 義ぎ勇ゆう Tomioka Giyū?) is a major supporting character of Demon Slayer: Kimetsu no Yaiba. He is a Demon Slayer of the Demon SlayShinobu Kocho (胡こ蝶ちょう しのぶ Kochō Shinobu?) is a major supporting character of Demon Slayer: Kimetsu no Yaiba. She is a Demon Slayer of the Demon Slayer Corps and the current Insect Hashira (蟲むし柱ばしら Mushi Bashira?). Shinobu Kocho is also the younger sister of Kanae Kocho along with her adoptive younger sister Kanao Tsuyuri. After a demon killed her parents, Shinobu joined the Demon Slayer Corps along with her sister in order to protect others from suffering the same fate as her.er Corps and the current Water Hashira (水みず柱ばしら Mizu Bashira?). Giyu always wears a stoic and unbothered expression on his face. He has a reserved personality and a strong sense of justice with no tolerance towards those who don't know their own limitations and throw away their lives."], 
    ['/assets/characters/charact7.png', 'Kyojuro Rengoku', 'Flame Breathing style', "Kyojuro Rengoku (煉れん獄ごく 杏きょう寿じゅ郎ろう Rengoku Kyōjurō?) was a major supporting character of Demon Slayer: Kimetsu no Yaiba and a major character in the Mugen Train Arc. He was a Demon Slayer of the Demon Slayer Corps and the former Flame Hashira (炎えん柱ばしら En Bashira?). Kyojuro was greatly enthusiastic in regard to his duties as a Hashira, and often came across as cheerfully eccentric. He was amiable, pure of heart and boasted extraordinary technique and swordsmanship stemming from strict practice and discipline."]);

    this.objectiveImageF = new Array<string>('/assets/characters/tanjiroFace.jpg', '/assets/characters/giyuFace.png', '/assets/characters/nezukoFace.jpg',
    '/assets/characters/shinobuFace.png', '/assets/characters/zenitsuFace.png', '/assets/characters/rengokuFace.png', '/assets/characters/inosukeFace.png');

    this.arrayNames = new Array<string>('Tanjiro', 'Nezuko', 'Zenitesu', 'Inosuke', 'Giyu', 'Shinobu', 'Rengoku');

    this.arrayObjectData = new Array<Array<string>>(['Kamado Tanjiro', 'In order to soothe the spirits of those it killed, and to make sure it claims no further victims... I will swing my blade down and lop off the head of any demon without mercy! But... I will not belittle those who regret their actions and suffer over the things they did as demons. Because demons were once human. Because they were like me.',
    'https://www.youtube.com/embed/dZMGoXpTrMA'], ['Giyu Tomioka', "Don't cry. Don't despair. Now's not the time for that. Feel the rage. The powerful pure rage of not being able to forgive will become your unswerving drive to take action!",
    'https://www.youtube.com/embed/WVvf1bp7vfw'], ['Nezuko Kamado', 'Humans are to be protected and saved. Never hurt them. I will never hurt them.',
    'https://www.youtube.com/embed/isyc6PgQDJ0'], ['Shinobu Kocho', 'I once believed that the road of happiness continued forever and ever into the distance. When it was destroyed, I realized for the first time that it lies upon a thin sheet of glass.',
    'https://www.youtube.com/embed/RDbRdYqvNdc'], ['Zenitsu Agatsuma', 'I hate myself more than anyone. I always think I have to get my act together, but I end up cowering, running away, sniveling. I want to change. I want to be a competent person.',
    'https://www.youtube.com/embed/N_PDjHF_jWo'], ['Kyojuro Rengoku', 'Life is a series of decisions. You never have unlimited options or unlimited time to think, but what you choose in that instant defines who you are.',
    'https://www.youtube.com/embed/1mMHvOIQxWo'], ['Inosuke Hashibira', "Don't cry even if you have regrets! No matter how pathetic or humiliated you feel, you still have to go on living!",
    'https://www.youtube.com/embed/lqzQyCiLI1A']);

   
    
    this.elementName = new Array<string>("Flame", 'Water', 'Thunder', 'Wind', 'Stone');
    
    this.countNumImage = 0;
    this.countElementClick = 0;
    this.handleNameCharactS = this.arrayCharacters[0][1];
    this.handleStyleCharactS = this.arrayCharacters[0][2];
    this.handleInfoCharactS = this.arrayCharacters[0][3];
    this.elementWidthCon = true;
    this.imageOWidthCon = true;


    this.objectiveLink = this.dom.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/dZMGoXpTrMA"+this.linkObjective);
    this.objectiveName = this.arrayObjectData[0][0];
    this.objectiveInfo = this.arrayObjectData[0][1];
  }


  

  ngAfterViewInit(): void {
    this.changeDetectorRef.markForCheck();
    this.changeDetectorRef.detectChanges();

    if(window.innerWidth <= 650 || window.innerWidth <= 1267){
      if(window.innerWidth <= 650){
        this.srcConditionBool = false;
      }
      this.srcConditionToText = true;
    }else{
      this.srcConditionBool = true;
      this.srcConditionToText = false;
    }


    if(window.innerWidth > 767){
      this.elementWidthCon = true;
    }else{
      this.elementWidthCon = false;
    }

    if(window.innerWidth > 991){
      this.imageOWidthCon = true;
    }else{
      this.imageOWidthCon = false;
    }

    this.ElementsTitleStyle = this.arrayElements[0][2];
    this.ElementsInfoStyle = this.arrayElements[0][3];
    this.arrayUsersElements = this.arrayElements[0][4];
    this.arrayOtherElements = this.arrayElements[0][5];
    this.lazyLoadingCharacter(0);
    this.elementConvert(this.arrayElements[0][5].length, 0);
  }

  //Character click function___________________________________________________
  characterSelected(numArr: number){
    if(this.numHandleCon != numArr){
      this.numHandleCon = numArr;
      this.lazyLoadingCharacter(numArr);
    }
  }
  
  //Character Lazy loading_______________________________________________________
  lazyLoadingCharacter(numArr: number): void{
    var doc = document.querySelector('.imgCharact');
    var query = <HTMLImageElement>doc;

    this.handleNumCharact = numArr;

    query.style.display = "none";
    query.style.width = (window.innerWidth > 650 ? "15%":"8%");
    query.style.height = (window.innerWidth > 650 ? "15%":"8%");
    query.src = "/assets/loading/loadingCharact.svg";
    
    setTimeout(() => {
      query.style.display = "block";
    }, 100);
    
    this.handleNameCharactS = this.arrayCharacters[this.handleNumCharact][1];
    this.handleStyleCharactS = this.arrayCharacters[this.handleNumCharact][2];
    this.handleInfoCharactS = this.arrayCharacters[this.handleNumCharact][3];

    this.subscriptionCharact = this.http.get(this.arrayCharacters[numArr][0], {responseType: 'blob'})
    .subscribe((data: any) => {
      this.subscriptionCharact.unsubscribe();
      query.src = URL.createObjectURL(data);
      query.style.width = (numArr != 5 ? "55%": "45%");
      query.style.height = "101%";
      query.style.display = "none";
      setTimeout(() => {
        query.style.display = "block";
      }, 100);
    });
  }

  //5 ELEMENTS click function___________________________________________________
  elements(num: number, condition: boolean){
    if(this.countElementClick != num){
      this.elementSelected = num;
      this.countElementClick = num;
      if(condition){
        this.countNumImage = 0;
        this.subscribe.unsubscribe();
        this.ElementsTitleStyle = this.arrayElements[num][2];
        this.ElementsInfoStyle = this.arrayElements[num][3];
        this.arrayUsersElements = this.arrayElements[num][4];
        this.elementConvert(this.arrayElements[num][5].length, num);
      }else{
        this.elementSelected = num;
        this.ElementsTitleStyle = 'Stone Style';
        this.ElementsInfoStyle = "Stone Breathing is a Breathing Style that mimics earth and stone and replicates it with the user's movements, techniques and abilities. Most, if not all, known techniques and forms utilizes the ground beneath the user and the vast surroundings to generate powerful and sturdy attacks that specialize in both offense and defense.";
        this.arrayUsersElements = new Array<string>('Gyomei Himejima');
        this.arrayOtherElements = new Array<Array<string>>(['']);
      }
    }
  }

  //Element Loading convert____________________________________
  elementConvert(lengthCountArr: number, numCountArr: number): void {
    var tempoArr = new Array<Array<string>>();
    for(var count = 0;count < lengthCountArr;count++){
      tempoArr.push(['/assets/loading/loading.svg', this.arrayElements[numCountArr][5][count][1]]);
    }
    this.arrayOtherElements = tempoArr;
    this.elementLazyLoading(lengthCountArr, this.countNumImage, numCountArr);
  } 

  //Element Lazy Loading__________________________________________
  elementLazyLoading(countArrParent: number, countArrChild: number, arrMCount: number): void{
    this.subscribe = this.http.get(this.arrayElements[arrMCount][5][countArrChild][0], {responseType: 'blob'})
    .subscribe((data: any) => {
      
      this.subscribe.unsubscribe();
      var query = <HTMLImageElement>document.querySelector('.relatedBreath'+this.countNumImage);
      query.src = URL.createObjectURL(data);

      this.countNumImage += 1;

      
        if(countArrParent-1 >= this.countNumImage){
          setTimeout(() => {
            this.elementLazyLoading(countArrParent, this.countNumImage, arrMCount); 
          }, 500);
        }

    });
  }




  //Objective clicked_________________________________________________________________________
  objectiveClicked(numO: number){
    if(this.objectiveNumCon != numO){
      this.objectiveNumCon = numO;
      this.objectiveName = this.arrayObjectData[numO][0];
      this.objectiveInfo = this.arrayObjectData[numO][1];

      this.objectiveLink = this.dom.bypassSecurityTrustResourceUrl(this.arrayObjectData[this.objectiveNumCon][2]+this.linkObjective);
    }
  }

}
