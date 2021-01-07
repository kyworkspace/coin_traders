import { configure, setAddon } from '@storybook/react';
//스토리가 자동으로 스토리북에 추가되도록 설정
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
//스토리북에서 JSX 코드를 확인하는 확장도구 임포드
import JSXAddon from 'storybook-addon-jsx';

import '../src/ui/app.css'


function loadStories(){
    //스토리가 자동으로 스토리북에 추가되도록 설정
    const context = require.context('../src/stories',true,/Story\.jsx$/);
    context.keys().forEach((srcFile)=>{
        interopRequireDefault(context(srcFile));
    })
}
setAddon(JSXAddon);
configure(loadStories,module);
//InputStory 파일을 LoadStories() 함수 안에서 require() 함수로 임포트함. 즉 Inpur스토리를 스토리북에 연결함