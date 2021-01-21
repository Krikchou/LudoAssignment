class bl1{
    cnt=-1;
    target;
    bmv=0;

    constructor(target){
        this.cnt=-1;
        this.target=target;
        this.bmv=0;
    }

    aba(arr, num, hasPlayed,stp, secpth){
        if(!hasPlayed){
            //this is for not being in starting position
            if(this.cnt>=0){
                //surpassing the size of the array
                if(this.bmv+num>arr.length){
                    if(this.cnt+num>=arr.length){
                        this.cnt = this.cnt-arr.length;
                    } 

                    this.cnt=this.cnt+num-2;
                    console.log(this.cnt+"asdfghjkjhgfdsa")
                    this.bmv=this.bmv+num;
                    try{
                    secpth[this.cnt].appendChild(this.target);
                    }catch(TypeError){
                        this.cnt=this.cnt-num+2;
                    }
                    return true;
                    
                }else{
                if(this.cnt+num>=arr.length){
                    this.cnt = this.cnt-arr.length;
                } 
                if((arr[this.cnt+num].children[0] instanceof bl1) || arr[this.cnt+num].children[0]==null){
                arr[this.cnt+num].appendChild(this.target);
                this.cnt=this.cnt+num;
                this.bmv=this.bmv+num;//\\//\\//\\//\\//\\//\\//\\
                console.log(this.cnt+"cnt bl");
                return true;
                }else{
                    if(arr[this.cnt+num].children.length>1){
                        alert("invalid move; cannot hit a pair or more");
                        return false;
                    }else{
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#ylw1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=4;i<8;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#red1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=7;i<11;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#grn1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=11;i<14;i++){
                                if(stp[i].children[0]==null){ 
                                    console.log("did it my man")
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                    arr[this.cnt+num].appendChild(this.target);
                    this.cnt=this.cnt+num;
                    this.bmv=this.bmv+num;//\\//\\//\\//\\//\\//\\
                    alert("HIT");
                    return true;
                    }
                }
            }
            }else{
                if(num==6){
                    arr[8].appendChild(this.target);
                    this.cnt=8;
                    this.bmv=6;
                    console.log(this.cnt+"cnt bl");
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return true;
        }
    }
}
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class bl2{
    cnt=-1;
    target;
    bmv=0;
    constructor(target){
        this.bmv=0;
        this.cnt=-1;
        this.target=target;
    }

    aba(arr, num, hasPlayed){
        if(!hasPlayed){
            //this is for not being in starting position
            if(this.cnt>=0){
                
                //surpassing the size of the array
                if(this.bmv+num>arr.length){
                    if(this.cnt+num>=arr.length){
                        this.cnt = this.cnt-arr.length;
                    } 

                    this.cnt=this.cnt+num-37;
                    console.log(this.cnt+"asdfghjkjhgfdsa")
                    this.bmv=this.bmv+num;
                    try{
                    secpth[this.cnt].appendChild(this.target);
                    }catch(TypeError){
                        this.cnt=this.cnt-num+37;
                    }
                    return true;
                    
                }else{
                if(this.cnt+num>=arr.length){
                    this.cnt = this.cnt-arr.length;
                } 
                if((arr[this.cnt+num].children[0] instanceof bl2) || arr[this.cnt+num].children[0]==null){
                arr[this.cnt+num].appendChild(this.target);
                this.cnt=this.cnt+num;
                this.bmv=this.bmv+num;
                console.log(this.cnt+"cnt bl");
                return true;
                }else{
                    if(arr[this.cnt+num].children.length>1){
                        alert("invalid move; cannot hit a pair or more");
                        return false;
                    }else{
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#bld1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#bld2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#bld3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#bld4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=0;i<4;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#red1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=7;i<11;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#grn1') ||
                            arr[this.cnt+num].children[0].target==document.querySelector('#grn2') ||
                            arr[this.cnt+num].children[0].target==document.querySelector('#grn3') ||
                            arr[this.cnt+num].children[0].target==document.querySelector('#grn4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=11;i<14;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        console.log(stp);
                    arr[this.cnt+num].appendChild(this.target);
                    this.cnt=this.cnt+num;
                    this.bmv=this.bmv+num;
                    alert("HIT");
                    return true;
                    }
                }
            }
            }else{
                if(num==6){
                    arr[44].appendChild(this.target);
                    this.cnt=44;
                    this.bmv=6;
                    console.log(this.cnt+"cnt bl");
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return true;
        }
   
        }
}

class bl3{
    cnt=-1;
    target;
    bmv=0;
    constructor(target){
        this.bmv=0;
        this.cnt=-1;
        this.target=target;
    }

    aba(arr, num, hasPlayed,stp, secpth){
        if(!hasPlayed){
            //this is for not being in starting position
            if(this.cnt>=0){
                //surpassing the size of the array
                if(this.bmv+num>arr.length){
                    if(this.cnt+num>=arr.length){
                        this.cnt = this.cnt-arr.length;
                    } 

                    this.cnt=this.cnt+num-13;
                    console.log(this.cnt+"asdfghjkjhgfdsa")
                    this.bmv=this.bmv+num;
                    try{
                    secpth[this.cnt].appendChild(this.target);
                    }catch(TypeError){
                        this.cnt=this.cnt-num+13;
                        return false;
                    }
                    return true;
                    
                }else{
                if(this.cnt+num>=arr.length){
                    this.cnt = this.cnt-arr.length;
                } 
                if((arr[this.cnt+num].children[0] instanceof bl1) || arr[this.cnt+num].children[0]==null){
                arr[this.cnt+num].appendChild(this.target);
                this.cnt=this.cnt+num;
                this.bmv=this.bmv+num;//\\//\\//\\//\\//\\//\\//\\
                console.log(this.cnt+"cnt bl");
                return true;
                }else{
                    if(arr[this.cnt+num].children.length>1){
                        alert("invalid move; cannot hit a pair or more");
                        return false;
                    }else{
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#ylw1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=4;i<8;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#red1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=7;i<11;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#grn1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=11;i<14;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                    arr[this.cnt+num].appendChild(this.target);
                    this.cnt=this.cnt+num;
                    this.bmv=this.bmv+num;//\\//\\//\\//\\//\\//\\
                    alert("HIT");
                    return true;
                    }
                }
            }
            }else{
                if(num==6){
                    arr[20].appendChild(this.target);
                    this.cnt=20;
                    this.bmv=6;
                    console.log(this.cnt+"cnt bl");
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return true;
        }
    }
}

class bl4{
    cnt=-1;
    target;
    bmv=0;
    constructor(target){
        this.cnt=-1;
        this.target=target;
        this.bmv=0;
    }

    aba(arr, num, hasPlayed,stp, secpth){
        if(!hasPlayed){
            //this is for not being in starting position
            if(this.cnt>=0){
                //surpassing the size of the array
                if(this.bmv+num>arr.length){
                    if(this.cnt+num>=arr.length){
                        this.cnt = this.cnt-arr.length;
                    } 

                    this.cnt=this.cnt+num-27;
                    console.log(this.cnt+"asdfghjkjhgfdsa")
                    this.bmv=this.bmv+num;
                    try{
                    secpth[this.cnt].appendChild(this.target);
                    }catch(TypeError){
                        this.cnt=this.cnt-num+27;
                    }
                    return true;
                    
                }else{
                if(this.cnt+num>=arr.length){
                    this.cnt = this.cnt-arr.length;
                } 
                if((arr[this.cnt+num].children[0] instanceof bl1) || arr[this.cnt+num].children[0]==null){
                arr[this.cnt+num].appendChild(this.target);
                this.cnt=this.cnt+num;
                this.bmv=this.bmv+num;//\\//\\//\\//\\//\\//\\//\\
                console.log(this.cnt+"cnt bl");
                return true;
                }else{
                    if(arr[this.cnt+num].children.length>1){
                        alert("invalid move; cannot hit a pair or more");
                        return false;
                    }else{
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#ylw1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#ylw4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=4;i<8;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#red1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#red4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=7;i<11;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                        if(arr[this.cnt+num].children[0].target==document.querySelector('#grn1') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn2') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn3') ||
                        arr[this.cnt+num].children[0].target==document.querySelector('#grn4')){
                            arr[this.cnt+num].children[0].cnt=-1;
                            for(var i=11;i<14;i++){
                                if(stp[i].children[0]==null){ 
                                    stp[i].appendChild(arr[this.cnt+num].children[0]);
                                    break;
                                }
                            }
                        }
                    arr[this.cnt+num].appendChild(this.target);
                    this.cnt=this.cnt+num;
                    this.bmv=this.bmv+num;//\\//\\//\\//\\//\\//\\
                    alert("HIT");
                    return true;
                    }
                }
            }
            }else{
                if(num==6){
                    arr[32].appendChild(this.target);
                    this.cnt=32;
                    this.bmv=6;
                    console.log(this.cnt+"cnt bl");
                    return true;
                }else{
                    return false;
                }
            }
        }else{
            return true;
        }
    }
}

const dice=document.querySelector('#dice');
const path=[document.querySelector('#midl').children[3].children[0],
            document.querySelector('#midl').children[3].children[4],
            document.querySelector('#midl').children[3].children[8],
            document.querySelector('#midl').children[3].children[9],
            document.querySelector('#midl').children[3].children[10],
            document.querySelector('#midl').children[3].children[11],
            document.querySelector('#midmid').children[3].children[2],//
            document.querySelector('#midmid').children[6],
            document.querySelector('#midmid').children[7].children[0],//
            document.querySelector('#midbot').children[1].children[0],
            document.querySelector('#midbot').children[1].children[3],
            document.querySelector('#midbot').children[1].children[6],
            document.querySelector('#midbot').children[1].children[9],
            document.querySelector('#midbot').children[1].children[10],
            document.querySelector('#midbot').children[1].children[11],
            document.querySelector('#midbot').children[1].children[8],
            document.querySelector('#midbot').children[1].children[5],
            document.querySelector('#midbot').children[1].children[2],//
            document.querySelector('#midmid').children[7].children[2],
            document.querySelector('#midmid').children[8],
            document.querySelector('#midmid').children[5].children[2],//
            document.querySelector('#midr').children[2].children[8],
            document.querySelector('#midr').children[2].children[9],
            document.querySelector('#midr').children[2].children[10],
            document.querySelector('#midr').children[2].children[11],
            document.querySelector('#midr').children[2].children[7],
            document.querySelector('#midr').children[2].children[3],
            document.querySelector('#midr').children[2].children[2],
            document.querySelector('#midr').children[2].children[1],
            document.querySelector('#midr').children[2].children[0],//
            document.querySelector('#midmid').children[5].children[0],
            document.querySelector('#midmid').children[2],
            document.querySelector('#midmid').children[1].children[2],//
            document.querySelector('#midt').children[4].children[11],
            document.querySelector('#midt').children[4].children[8],
            document.querySelector('#midt').children[4].children[5],
            document.querySelector('#midt').children[4].children[2],
            document.querySelector('#midt').children[4].children[1],
            document.querySelector('#midt').children[4].children[0],
            document.querySelector('#midt').children[4].children[3],
            document.querySelector('#midt').children[4].children[6],
            document.querySelector('#midt').children[4].children[9],//
            document.querySelector('#midmid').children[1].children[0],
            document.querySelector('#midmid').children[0],
            document.querySelector('#midmid').children[3].children[0],//
            document.querySelector('#midl').children[3].children[3],
            document.querySelector('#midl').children[3].children[2],
            document.querySelector('#midl').children[3].children[1],
            ];
const stpos=[document.querySelector('#stbl').children[0],
            document.querySelector('#stbl').children[1],
            document.querySelector('#stbl').children[2],
            document.querySelector('#stbl').children[3],
            document.querySelector('#styw').children[0],
            document.querySelector('#styw').children[1],
            document.querySelector('#styw').children[2],
            document.querySelector('#styw').children[3],
            document.querySelector('#strd').children[0],
            document.querySelector('#strd').children[1],
            document.querySelector('#strd').children[2],
            document.querySelector('#strd').children[3],
            document.querySelector('#stgr').children[0],
            document.querySelector('#stgr').children[1],
            document.querySelector('#stgr').children[2],
            document.querySelector('#stgr').children[3],
            ];
// blue win path
const brpathb=[ document.querySelector('#midl').children[3].children[5],
                document.querySelector('#midl').children[3].children[6],
                document.querySelector('#midl').children[3].children[7],
                document.querySelector('#midmid').children[3].children[1]];
// red win path
const brpathr=[ document.querySelector('#midbot').children[1].children[7],
                document.querySelector('#midbot').children[1].children[4],
                document.querySelector('#midbot').children[1].children[1],
                document.querySelector('#midmid').children[7].children[1]];
// yellow win path
const brpathy=[ document.querySelector('#midt').children[4].children[4],
                document.querySelector('#midt').children[4].children[7],
                document.querySelector('#midt').children[4].children[10],
                document.querySelector('#midmid').children[1].children[1]];
// green win path
const brpathg=[ document.querySelector('#midr').children[2].children[6],
                document.querySelector('#midr').children[2].children[5],
                document.querySelector('#midr').children[2].children[4],
                document.querySelector('#midmid').children[5].children[1]];

            const bb1=document.querySelector('#bld1');
            const bb2=document.querySelector('#bld2');
            const bb3=document.querySelector('#bld3');
            const bb4=document.querySelector('#bld4');
            const yy1=document.querySelector('#ylw1');
            const yy2=document.querySelector('#ylw2');
            const yy3=document.querySelector('#ylw3');
            const yy4=document.querySelector('#ylw4');
            const rr1=document.querySelector('#red1');
            const rr2=document.querySelector('#red2');
            const rr3=document.querySelector('#red3');
            const rr4=document.querySelector('#red4');
            const gg1=document.querySelector('#grn1');
            const gg2=document.querySelector('#grn2');
            const gg3=document.querySelector('#grn3');
            const gg4=document.querySelector('#grn4');
            let a=new bl1(document.querySelector('#bld1'));
            let b=new bl1(document.querySelector('#bld2'));
            let c=new bl1(document.querySelector('#bld3'));
            let d=new bl1(document.querySelector('#bld4'));
            let ay=new bl2(document.querySelector('#ylw1'));
            let by=new bl2(document.querySelector('#ylw2'));
            let cy=new bl2(document.querySelector('#ylw3'));
            let dy=new bl2(document.querySelector('#ylw4'));
            let ar=new bl3(document.querySelector('#red1'));
            let br=new bl3(document.querySelector('#red2'));
            let cr=new bl3(document.querySelector('#red3'));
            let dr=new bl3(document.querySelector('#red4'));
            let ag=new bl4(document.querySelector('#grn1'));
            let bg=new bl4(document.querySelector('#grn2'));
            let cg=new bl4(document.querySelector('#grn3'));
            let dg=new bl4(document.querySelector('#grn4'));
            var cnt=0;
    
           
                
                    
                          

        bb1.disabled=true;
        bb2.disabled=true;
        bb3.disabled=true;
        bb4.disabled=true;
        rr1.disabled=true;
        rr2.disabled=true;
        rr3.disabled=true;
        rr4.disabled=true;
        yy1.disabled=true;
        yy2.disabled=true;
        yy3.disabled=true;
        yy4.disabled=true;
        gg1.disabled=true;
        gg2.disabled=true;
        gg3.disabled=true;
        gg4.disabled=true;
        
        
        dice.addEventListener('click' ,function dicegen(){
            var rand=Math.ceil( Math.random()*6);
            var hasPlayedTurn=false;
            var temp=false;
            console.log(rand);
            dice.disabled=true;
            console.log(dice.disabled)
            switch(rand){
            case 1: dice.children[0].style.opacity="-1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="-1";
                dice.children[3].style.opacity="-1";
                dice.children[4].style.opacity="1";
                dice.children[5].style.opacity="-1";
                dice.children[6].style.opacity="-1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="-1";

                break;
            case 2: dice.children[0].style.opacity="1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="-1";
                dice.children[3].style.opacity="-1";
                dice.children[4].style.opacity="-1";
                dice.children[5].style.opacity="-1";
                dice.children[6].style.opacity="-1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="1";

                break;
            case 3: dice.children[0].style.opacity="1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="-1";
                dice.children[3].style.opacity="-1";
                dice.children[4].style.opacity="1";
                dice.children[5].style.opacity="-1";
                dice.children[6].style.opacity="-1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="1";

                break;
            case 4: dice.children[0].style.opacity="1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="1";
                dice.children[3].style.opacity="-1";
                dice.children[4].style.opacity="-1";
                dice.children[5].style.opacity="-1";
                dice.children[6].style.opacity="1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="1";

                break;
            case 5: dice.children[0].style.opacity="1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="1";
                dice.children[3].style.opacity="-1";
                dice.children[4].style.opacity="1";
                dice.children[5].style.opacity="-1";
                dice.children[6].style.opacity="1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="1";

                break;
            case 6: dice.children[0].style.opacity="1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="1";
                dice.children[3].style.opacity="1";
                dice.children[4].style.opacity="-1";
                dice.children[5].style.opacity="1";
                dice.children[6].style.opacity="1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="1";

                break;
            default:dice.children[0].style.opacity="-1";
                dice.children[1].style.opacity="-1";
                dice.children[2].style.opacity="-1";
                dice.children[3].style.opacity="-1";
                dice.children[4].style.opacity="-1";
                dice.children[5].style.opacity="-1";
                dice.children[6].style.opacity="-1";
                dice.children[7].style.opacity="-1";
                dice.children[8].style.opacity="-1";
                break;
            }

           

            if(cnt>3){
                cnt=cnt-4;
            }
            switch(cnt){
                case 0: alert("blues turn");
                bb1.disabled=false;
                bb2.disabled=false;
                bb3.disabled=false;
                bb4.disabled=false;
                rr1.disabled=true;
                rr2.disabled=true;
                rr3.disabled=true;
                rr4.disabled=true;
                yy1.disabled=true;
                yy2.disabled=true;
                yy3.disabled=true;
                yy4.disabled=true;
                gg1.disabled=true;
                gg2.disabled=true;
                gg3.disabled=true;
                gg4.disabled=true;
                if(rand!=6){
                    if(a.cnt==-1 && b.cnt==-1 && c.cnt==-1 && d.cnt==-1){
                        bb1.disabled=true;
                        bb2.disabled=true;
                        bb3.disabled=true;
                        bb4.disabled=true;
                        alert("no posssible moves");
                        dice.disabled=false;
                    }else{
                        if(a.cnt==-1){
                            bb1.disabled=true; 
                        }
                        if(b.cnt==-1){
                            bb2.disabled=true; 
                        }
                        if(c.cnt==-1){
                            bb3.disabled=true; 
                        }
                        if(d.cnt==-1){
                            bb4.disabled=true; 
                        }
                    }
                }
                bb1.addEventListener('click', function dd(){ 
                    temp=a.aba(path, rand, hasPlayedTurn,stpos,brpathb);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);
                    });
                    bb2.addEventListener('click', function dd(){ 
                        hasPlayedTurn=b.aba(path, rand, hasPlayedTurn,stpos,brpathb);
                        hasPlayedTurn=true;
                        dice.disabled=false;
                        console.log(hasPlayedTurn);
                    });
                    bb3.addEventListener('click', function dd(){
                        temp= c.aba(path, rand, hasPlayedTurn,stpos,brpathb);
                        hasPlayedTurn=true;
                        dice.disabled=false;
                        console.log(hasPlayedTurn);
                    });
                    bb4.addEventListener('click', function dd(){
                        temp= d.aba(path, rand, hasPlayedTurn,stpos,brpathb);
                        hasPlayedTurn=true;
                        dice.disabled=false;
                        console.log(hasPlayedTurn);
                    });
                        break;
                case 1: alert("reds turn");
                bb1.disabled=true;
                bb2.disabled=true;
                bb3.disabled=true;
                bb4.disabled=true;
                rr1.disabled=false;
                rr2.disabled=false;
                rr3.disabled=false;
                rr4.disabled=false;
                yy1.disabled=true;
                yy2.disabled=true;
                yy3.disabled=true;
                yy4.disabled=true;
                gg1.disabled=true;
                gg2.disabled=true;
                gg3.disabled=true;
                gg4.disabled=true;
                if(rand!=6){
                    if(ar.cnt==-1 && br.cnt==-1 && cr.cnt==-1 && dr.cnt==-1){
                        rr1.disabled=true;
                        rr2.disabled=true;
                        rr3.disabled=true;
                        rr4.disabled=true;
                        alert("no posssible moves");
                        dice.disabled=false;
                    }else{
                        if(ar.cnt==-1){
                            rr1.disabled=true; 
                        }
                        if(br.cnt==-1){
                            rr2.disabled=true; 
                        }
                        if(cr.cnt==-1){
                            rr3.disabled=true; 
                        }
                        if(dr.cnt==-1){
                            rr4.disabled=true; 
                        }
                    }
                }
                rr1.addEventListener('click', function dd(){
                    temp= ar.aba(path, rand,hasPlayedTurn,stpos, brpathr);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                rr2.addEventListener('click', function dd(){
                    temp= br.aba(path, rand,hasPlayedTurn,stpos,brpathr);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                rr3.addEventListener('click', function dd(){
                    temp= cr.aba(path, rand,hasPlayedTurn,stpos,brpathr);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                rr4.addEventListener('click', function dd(){
                    temp= dr.aba(path, rand, hasPlayedTurn,stpos,brpathr);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});   
                        break;
                case 2: alert("greens turn");
                bb1.disabled=true;
                bb2.disabled=true;
                bb3.disabled=true;
                bb4.disabled=true;
                rr1.disabled=true;
                rr2.disabled=true;
                rr3.disabled=true;
                rr4.disabled=true;
                yy1.disabled=true;
                yy2.disabled=true;
                yy3.disabled=true;
                yy4.disabled=true;
                gg1.disabled=false;
                gg2.disabled=false;
                gg3.disabled=false;
                gg4.disabled=false;
                if(rand!=6){
                    if(ag.cnt==-1 && bg.cnt==-1 && cg.cnt==-1 && dg.cnt==-1){
                        gg1.disabled=true;
                        gg2.disabled=true;
                        gg3.disabled=true;
                        gg4.disabled=true;
                        alert("no posssible moves");
                        dice.disabled=false;
                    }else{
                        if(ag.cnt==-1){
                            gg1.disabled=true; 
                        }
                        if(bg.cnt==-1){
                            gg2.disabled=true; 
                        }
                        if(cg.cnt==-1){
                            gg3.disabled=true; 
                        }
                        if(dg.cnt==-1){
                            gg4.disabled=true; 
                        }
                    }
                }
                gg1.addEventListener('click', function dd(){
                    temp= ag.aba(path, rand,hasPlayedTurn,stpos,brpathg);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                gg2.addEventListener('click', function dd(){
                    temp= bg.aba(path, rand,hasPlayedTurn,stpos,brpathg);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                gg3.addEventListener('click', function dd(){
                    temp= cg.aba(path, rand,hasPlayedTurn,stpos,brpathg);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                gg4.addEventListener('click', function dd(){
                    temp= dg.aba(path, rand,hasPlayedTurn,stpos,brpathg);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                        break;
                case 3: alert("yellows turn");
                bb1.disabled=true;
                bb2.disabled=true;
                bb3.disabled=true;
                bb4.disabled=true;
                rr1.disabled=true;
                rr2.disabled=true;
                rr3.disabled=true;
                rr4.disabled=true;
                yy1.disabled=false;
                yy2.disabled=false;
                yy3.disabled=false;
                yy4.disabled=false;
                gg1.disabled=true;
                gg2.disabled=true;
                gg3.disabled=true;
                gg4.disabled=true;
                if(rand!=6){
                    if(ay.cnt==-1 && by.cnt==-1 && cy.cnt==-1 && dy.cnt==-1){
                        yy1.disabled=true;
                        yy2.disabled=true;
                        yy3.disabled=true;
                        yy4.disabled=true;
                        alert("no posssible moves");
                        dice.disabled=false;
                    }else{
                        if(ay.cnt==-1){
                            yy1.disabled=true; 
                        }
                        if(by.cnt==-1){
                            yy2.disabled=true; 
                        }
                        if(cy.cnt==-1){
                            yy3.disabled=true; 
                        }
                        if(dy.cnt==-1){
                            yy4.disabled=true; 
                        }
                    }
                }
                yy1.addEventListener('click', function dd(){
                    temp= ay.aba(path, rand,hasPlayedTurn,stpos,brpathy);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                yy2.addEventListener('click', function dd(){
                    temp= by.aba(path, rand,hasPlayedTurn,stpos,brpathy);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                yy3.addEventListener('click', function dd(){
                    temp= cy.aba(path, rand,hasPlayedTurn,stpos,brpathy);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                yy4.addEventListener('click', function dd(){
                    temp= dy.aba(path, rand,hasPlayedTurn,stpos,brpathy);
                    hasPlayedTurn=true;
                    dice.disabled=false;
                    console.log(hasPlayedTurn);});
                        break;
            }
            if(rand!=6){
            cnt++;
            }
           
                


            

        });

