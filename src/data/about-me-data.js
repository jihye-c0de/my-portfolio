import profilePhoto from '../assets/profile.jpg';
import profilePhotoWebp from '../assets/profile.webp';

export const ABOUT_ME_DATA = {
  basicInfo: {
    name: '이지혜',
    education: '전주대학교 산업디자인학과',
    major: '산업디자인',
    experience: '신입',
    photo: profilePhoto,
    photoWebp: profilePhotoWebp,
  },
  sections: [
    {
      id: 'dev-story',
      title: '나의 개발 스토리',
      content:
        '전주대학교 산업디자인학과에서 4년간 제품과 공간을 만드는 법을 배웠습니다. 전공을 마칠 즈음, 사람들이 매일 손에 쥐는 화면 안의 경험을 직접 만들어보고 싶다는 흥미가 생겼고, 그 흥미를 따라 웹디자인과 개발의 세계로 방향을 틀었습니다. 전공을 그대로 잇기보다 흥미를 따라간 전환이었지만, 산업디자인에서 배운 입체적인 조형 감각과 사용자 중심 사고는 지금의 작업에도 그대로 이어지고 있습니다.',
      showInHome: true,
    },
    {
      id: 'philosophy',
      title: '개발 철학',
      content:
        '사용자 경험을 최우선으로 생각합니다. 화면 뒤에는 항상 그것을 사용하는 사람이 있다는 걸 잊지 않으려 하고, 작은 디테일 하나도 놓치지 않으려 노력합니다. 동시에 결과물은 군더더기 없이 깔끔하게 정돈해, 사용자가 고민 없이 원하는 것을 찾을 수 있도록 만드는 것을 목표로 합니다.',
      showInHome: true,
    },
    {
      id: 'personal',
      title: '개인적인 이야기',
      content:
        '네일아트로 손끝을 꾸미고, 뜨개질로 한 올 한 올을 엮고, 동물의 숲에서 섬을 가꾸며 이웃을 모으고, 사진을 찍고 다듬는 것까지 작고 오밀조밀한 것들을 모으고 꾸미는 시간을 좋아합니다. 디지털카메라로 순간을 담아 영상으로 편집하며 하나의 이야기로 완성하는 과정도 즐깁니다. 이렇게 취향은 맥시멀에 가깝지만, 정작 제가 만드는 공간과 결과물은 군더더기 없이 정돈된 미니멀을 지향합니다. 디테일에 진심인 사람일수록 오히려 더 정돈된 결과물을 만든다고 믿기 때문입니다.',
      showInHome: false,
    },
  ],
};
