import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit{
  constructor(private router:Router, private changeDetectorRef:ChangeDetectorRef) { }
  user:any;
  name:string;
  task:string;
  project:string;
  tasks:any=[];
  clock: Subscription;
  running:boolean=false;
  btnText="start";
  projects=['Area51', 'Apollo11', 'Falcon9', 'Hyperloop', 'Starlink', 'OpenAI'];

  ngOnInit(): void {
    if( sessionStorage.getItem('social_usr')===null && sessionStorage.getItem('usr')===null){
      this.router.navigate(['login']);
    }
  }

  startTimer(event,i){
    this.running=!this.running;
    if(this.running){
      event.srcElement.innerHTML="Stop";
      const timer = interval(1000);
      const startTime = Date.now() - 0;
      this.clock = timer.subscribe(counter => {
        counter = Date.now() - startTime;
        this.tasks[i]['hours']=Math.floor((counter) / (1000 * 60 * 60));
        this.tasks[i]['minutes']= Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
        this.tasks[i]['seconds']= Math.floor((counter % (1000 * 60)) / 1000).toFixed(0);
        if(Number(this.tasks[i]['hours']) < 10){
          this.tasks[i]['hours'] = '0' + this.tasks[i]['hours'];
        }
        else{
          this.tasks[i]['hours'] = '' + this.tasks[i]['hours'];
        }
        if (Number(this.tasks[i]['minutes']) < 10) {
          this.tasks[i]['minutes'] = '0' + this.tasks[i]['minutes'];
        }
        else {
          this.tasks[i]['minutes'] = '' + this.tasks[i]['minutes'];
        }
        if (Number(this.tasks[i]['seconds']) < 10) {
          this.tasks[i]['seconds'] = '0' + this.tasks[i]['seconds'];
        }
        else {
          this.tasks[i]['seconds'] = '' + this.tasks[i]['seconds'];
        }
        console.log(this.tasks[i]['minutes']+":"+this.tasks[i]['seconds']);
        this.changeDetectorRef.detectChanges();
      });
    }
    else{
      this.countTotalTime(this.tasks[i]['hours'],this.tasks[i]['minutes'],this.tasks[i]['seconds'],i);
      this.clock.unsubscribe();
      console.log(this.tasks[i]['time']);
      this.changeDetectorRef.detectChanges();
      event.srcElement.innerHTML="Strat";
    }
  }

  countTotalTime(hours,minutes,seconds,i){
    if(Number(this.tasks[i]['time']['totalminute'])+Number(minutes)>60){
      this.tasks[i]['time']['totalhour']+=1;
      this.tasks[i]['time']['totalminute']+=(Number(minutes)-60);
    }
    if(Number(this.tasks[i]['time']['totalsecond'])+Number(seconds)>60){
      this.tasks[i]['time']['totalminute']+=1;
      this.tasks[i]['time']['totalsecond']+=(Number(seconds)-60);
    }
    else{
      this.tasks[i]['time']['totalhour']=Number(this.tasks[i]['time']['totalhour'])+Number(hours);
      this.tasks[i]['time']['totalminute']=Number(this.tasks[i]['time']['totalminute'])+Number(minutes);
      this.tasks[i]['time']['totalsecond']=Number(this.tasks[i]['time']['totalsecond'])+Number(seconds);
    }
  }

  addTask(){
    const t={'project':this.project,'task':this.task,'hours':'00','minutes':'00','seconds':'00','time':{'totalhour':0,'totalminute':0,'totalsecond':0}};
    this.tasks.push(t);
    this.project="";
    this.task="";
  }
}
