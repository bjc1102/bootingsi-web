# Tech Stack

- NextJS
- Typescript
- Tailwind
- React-Query

# Summary

- Auth HOC 구현
- 추상화 및 코드 리팩토링
- React-Query를 통한 폴더 구조 수정 및 서버 상태 관리

# Command

```
yarn install && yarn dev
```

# 폴더 구조

폴더구조는 [리액트 공식문서](https://legacy.reactjs.org/docs/faq-structure.html)와 [React-Query 개발자의 문서](https://tkdodo.eu/blog/effective-react-query-keys#colocate)를 참조하였습니다.

```
.
├── components
│   ├── Authentication
│   │   ├── LoginButton.tsx
│   │   └── LogoutButton.tsx
│   ├── Card
│   │   ├── CardMenuBar.tsx
│   │   ├── ClipCard.tsx
│   │   ├── ClipCardList.tsx
│   │   ├── ClipDeleteButton.tsx
│   │   ├── ClipListTab.tsx
│   │   └── queries
│   │       ├── useDeleteClip.tsx
│   │       ├── useGetClipList.tsx
│   │       └── useUpdateFavoriteClip.tsx
│   ├── Header
│   │   ├── CreateClipForm.tsx
│   │   ├── Logo.tsx
│   │   ├── index.tsx
│   │   └── queries
│   │       └── useSetClip.tsx
│   ├── Layout
│   │   ├── HomeLayout.tsx
│   │   ├── LoginLayout.tsx
│   │   └── SpinnerLayout.tsx
│   └── common
│       ├── Button.tsx
│       ├── ConfirmModal.tsx
│       └── Input.tsx
├── constant
│   ├── const.ts
│   └── query.key.ts
├── hooks
│   ├── Auth
│   │   ├── AuthProvider.tsx
│   │   ├── queries
│   │   │   └── useUpdateToken.tsx
│   │   └── withAuth.tsx
│   ├── useForm.tsx
│   ├── useModal.tsx
│   └── useOutsideClick.tsx
├── lib
│   ├── axios
│   │   ├── index.ts
│   │   └── instance.ts
│   └── react-query.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   └── index.tsx
├── postcss.config.js
├── public
│   ├── README
│   │   ├── use.PNG
│   │   ├── use2.PNG
│   │   └── use3.PNG
│   ├── assets
│   │   ├── \010SpinnerIcon.tsx
│   │   ├── AlertIcon.tsx
│   │   ├── CloseIcon.tsx
│   │   ├── DirectoryIcon.tsx
│   │   ├── GoogleIcon.tsx
│   │   ├── LoadingIcon.tsx
│   │   ├── PlanetIcon.tsx
│   │   ├── PlusIcon.tsx
│   │   ├── SearchIcon.tsx
│   │   └── StarIcon.tsx
│   ├── icon16.png
│   └── vercel.svg
├── styles
│   └── global.css
├── tsconfig.json
├── types
│   ├── auth.ts
│   ├── clip.ts
│   ├── common.ts
│   ├── error.ts
│   └── utils.ts
├── utils
│   ├── animation.ts
│   ├── sliceString.ts
│   ├── toast.ts
│   ├── token.ts
│   ├── validate.ts
│   └── window.ts
└── yarn.lock
```
