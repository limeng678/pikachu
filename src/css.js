const string=`
/*你好，我叫李萌*/
/*今天想用CSS给你画一只可爱的皮卡丘*/
/*首先它有黄色的皮肤*/
.skin *{box-sizing: border-box;margin:0;padding:0}
.skin *::before,*::after{box-sizing:border-box}

.skin{
    position: relative;
    background:#ffe600;
    min-height:50vh;   
    bottom:0; 
}

/*小巧玲珑的鼻子*/

.nose{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 20px;
    margin-left: -105px;
    z-index:10   
}
  .yuan{
    position: absolute;
    width:20px;
    height:6px;
    top:-16px;
    left:-10px;
    border-radius: 10px 10px 0 0;
    background:black;
}
  
  @keyframes wave{
      0%{
          transform: rotate(0deg);
      }
      33%{
          transform: rotate(5deg);
      }
      66%{
          transform: rotate(-5deg);
      }
      100%{
          transform: rotate(0deg);
      }
  }
  .nose:hover{
      transform-origin: center bottom;
      animation: wave 300ms infinite linear;
  }


/*两个大眼睛*/

.eye{
    border:2px solid #000;
    width:64px;
    height:64px;
    position:absolute;
    left:50%;
    top:45px;
    margin-left:-32px;
    background: #2e2e2e;
    border-radius: 50%;
}

.eye::before{
    content: '';
    display:block;
    border:3px solid #000;
    width:30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position:relative;
    left:5px;
    top:2px;
}

.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}

/*还有开心大笑的嘴巴*/

.mouth{ 
    
    width:200px;
    height:200px;
    position:absolute;
    left:50%;
    top:70px;
    margin-left: -195px;
}

.mouth .up{
    position: relative;
    top:-20px;
    z-index: 1;
}
.mouth .up .lip{
    border:3px solid black;
    height:30px;
    width:100px;
    background: #ffe600;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left:50%;
    margin-left: -50px;

}
.mouth .up .lip.left{   
    border-radius: 0 0 0 50px; 
    transform: rotate(-15deg)translateX(-53px);    
}
.mouth .up .lip.right{
    
    border-radius: 0 0 50px 0;
    transform: rotate(15deg)translateX(53px);    
}

.mouth .up .lip::before{
    content:'';
    display:block;
    width:7px;
    height:30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;


}
.mouth .up .lip.left::before{    
    right:-6px;        
}

.mouth .up .lip.right::before{    
    left:-6px;    
}
.mouth .down{
    
    height:180px;
    position: absolute;
    top:0px;
    width:100%;
    overflow: hidden;    
}

.mouth .down .yuan1{
    border:3px solid black;
    width:150px;
    height:1000px;
    position:absolute;
    bottom: 0;
    left: 50%;
    margin-left:-75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;    
}
.mouth .down .yuan1 .yuan2{
    width:200px;
    height:300px;
    background:#ff485f;
    position:absolute;
    bottom:-155px;
    left:50%;
    margin-left:-100px;
    border-radius: 100px;
}

/*红红的脸颊*/

.face{
    position: absolute;
    margin-left:-114px;
    border:3px solid black;
    width: 88px;
    height: 88px;
    top: 109px;
    z-index: 3;
}

.face.left{
    transform: translateX(-142px);
    background: #ff0000;
    border-radius: 50%;
}

.face.right{
    transform: translateX(142px);
    background: #ff0000;
    border-radius: 50%;
}

/*活动一下眼睛*/

@keyframes eyeMove{
    0%,100%{
      top:3px;
      left:3px;
    }
    30%,60%,70%{
      top: 0;
      left: 23px;
    }
    40%{
      top: 0;
      left: 15px;
    }
    50%{
      top: 0;
      left: 5px;
    }
    80%,90%{
      top: 30px;
      left: 15px;
    }
  }

  .eye::before{ 
    animation: eyeMove 3s infinite;
  }

/*动动嘴巴*/

@keyframes mouthMove {
    0%,46%,54%,100%{
        height: 180px;
      }
      50%{
        height: 20px;
      }
  }
.mouth .down{
    animation: mouthMove 4s infinite;
  }
  
  /*好啦，这只可爱的皮卡丘就送给你啦*/
  /*最后可以把鼠标放在它的嘴巴上*/
  /*让它唱首歌给你听*/
  /*希望它能给你带来快乐*/
`
export default string;