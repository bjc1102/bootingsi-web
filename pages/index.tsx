import { NextPage } from 'next'
import React from 'react'
import { useRecoilValue } from 'recoil'

import { modalState } from '../atoms/modal'
import { CardListState } from '../atoms/card'
import AddCardModal from '../components/Modal/AddCardModal'
import Card from '../components/Card'
import Nav from '../components/Header'
import ModalOpenButton from '../components/Modal/ModalOpenButton'

//BEM 방식 ( block , element , model )

const Home: NextPage = () => {
  const cardList = useRecoilValue(CardListState)
  const modal = useRecoilValue(modalState)

  return (
    <main className="max-w-5xl mx-auto px-16">
      <Nav />
      {modal && <AddCardModal />}
      <section className="grid grid-cols-3 gap-x-5 md:grid-cols-1 my-16">
        {cardList.map((v) => {
          return <Card key={v.id} {...v} />
        })}
      </section>
      <ModalOpenButton />
    </main>
  )
}

export default Home
