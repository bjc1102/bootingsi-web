import React from 'react'
import useForm from '@/hooks/useForm'
import { URLType } from '@/types/clip'
import urlValidation from '@/utils/validate'
import LoadingIcon from 'public/assets/LoadingIcon'
import useSetClip from '@/components/Header/queries/useSetClip'
import Input from '@/components/common/Input'
import { successToast } from '@/utils/toast'
import { useQueryClient } from '@tanstack/react-query'
import { UserClipListKey } from 'constant/query.key'

const CreateClipForm = () => {
  const { isLoading, mutate: setClip } = useSetClip()
  const queryClient = useQueryClient()

  const { handleChange, handleSubmit } = useForm<URLType>({
    initialValue: { siteURL: '' },
    validate: urlValidation,
    onSubmit: ({ siteURL }) =>
      setClip(siteURL, {
        onSuccess() {
          successToast('클립이 성공적으로 저장되었습니다!')
          queryClient.invalidateQueries(UserClipListKey)
        },
      }),
  })

  return (
    <form className="w-[800px]" onSubmit={handleSubmit}>
      <label className="mb-2 text-sm font-medium sr-only text-white">
        추가하기
      </label>
      <div className="relative">
        <Input
          onChange={handleChange}
          name="siteURL"
          placeholder="URL을 입력하세요"
          required
        />
        <button
          type="submit"
          className="absolute cursor-pointer rounded-r-lg text-white top-0 right-0 h-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2 bg-accentColor1 hover:bg-blue-700 focus:ring-blue-800"
        >
          {isLoading ? <LoadingIcon /> : '추가하기'}
        </button>
      </div>
    </form>
  )
}

export default CreateClipForm
