class bl1{
    cnt=0;
    target;

    constructor(target){
        this.cnt=2;
        this.target=target;
    }

    aba(arr){
        if(this.cnt>=arr.length){
            this.cnt = this.cnt-arr.length;
        }    
                arr[this.cnt].appendChild(this.target);
            this.cnt++;
            console.log(this.cnt);
        }
}

class bl2{
    cnt=0;
    target;

    constructor(target){
        this.cnt=38;
        this.target=target;
    }

    aba(arr){
        if(this.cnt>=arr.length){
            this.cnt = this.cnt-arr.length;
        }    
                arr[this.cnt].appendChild(this.target);
            this.cnt++;
            console.log(this.cnt);
        }
}

class bl3{
    cnt=0;
    target;

    constructor(target){
        this.cnt=14;
        this.target=target;
    }

    aba(arr){
        if(this.cnt>=arr.length){
            this.cnt = this.cnt-arr.length;
        }    
                arr[this.cnt].appendChild(this.target);
            this.cnt++;
            console.log(this.cnt);
        }
}

class bl4{
    cnt=0;
    target;

    constructor(target){
        this.cnt=26;
        this.target=target;
    }

    aba(arr){
        if(this.cnt>=arr.length){
            this.cnt = this.cnt-arr.length;
        }    
                arr[this.cnt].appendChild(this.target);
            this.cnt++;
            console.log(this.cnt);
        }
}


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
            
            
        bb1.addEventListener('click', function dd(){ a.aba(path);});
        bb2.addEventListener('click', function dd(){ b.aba(path);});
        bb3.addEventListener('click', function dd(){ c.aba(path);});
        bb4.addEventListener('click', function dd(){ d.aba(path);});
        yy1.addEventListener('click', function dd(){ ay.aba(path);});
        yy2.addEventListener('click', function dd(){ by.aba(path);});
        yy3.addEventListener('click', function dd(){ cy.aba(path);});
        yy4.addEventListener('click', function dd(){ dy.aba(path);});
        rr1.addEventListener('click', function dd(){ ar.aba(path);});
        rr2.addEventListener('click', function dd(){ br.aba(path);});
        rr3.addEventListener('click', function dd(){ cr.aba(path);});
        rr4.addEventListener('click', function dd(){ dr.aba(path);});
        gg1.addEventListener('click', function dd(){ ag.aba(path);});
        gg2.addEventListener('click', function dd(){ bg.aba(path);});
        gg3.addEventListener('click', function dd(){ cg.aba(path);});
        gg4.addEventListener('click', function dd(){ dg.aba(path);});
