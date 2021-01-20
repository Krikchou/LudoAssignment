const midl = document.querySelector('#midl');
const pathPrime=[
    document.querySelector('#midl').children[3].hasChildNodes(),
    document.getElementById('midr').childNodes[3],
    document.getElementById('midbot').childNodes[2],
    document.getElementById('midt').childNodes[5],
    document.getElementById('midmid').childNodes[2],
    document.getElementById('midmid').childNodes[4],
    document.getElementById('midmid').childNodes[6],
    document.getElementById('midmid').childNodes[8]
];
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

            const bl=document.querySelector('#bld1');
            var i=0;
            function smth(){
                if(i>=path.length){
                    i=i-path.length;
                }    
                        path[i].appendChild(bl);
                    i++;
                    
        }
            
            bl.addEventListener('click', smth);
