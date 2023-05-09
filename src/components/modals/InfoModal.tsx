import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      WORDLE'i 6 denemede bulun. Her tahmin 5 harfli doğru bir kelime olmalıdır. Göndermek için enter'a basın. Her tahminden sonra kutucukların renkleri tahmininizin yakınlığına göre değişecektir.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="B" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A harfi kelimede var ve doğru yerde.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="G" isCompleted={true} />
        <Cell value="İ" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Z"
          status="present"
        />
        <Cell value="E" isCompleted={true} />
        <Cell value="M" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Z harfi kelimede var fakat yanlış yerde.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="F" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="Z" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        E harfi kelimede yok.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Bu site Ömer Kala tarafından çevresi için yayına aldığı Wordle benzeri bir uygulamadır. -{' '}
        <a
          href="https://kalaomer.com"
          className="font-bold underline"
        >
          Ömer Kala hakkında bilgi almak için tıklayınız :)
        </a>{' '}
      </p>
    </BaseModal>
  )
}
