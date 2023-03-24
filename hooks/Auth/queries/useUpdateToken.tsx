import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authAPI } from 'lib/axios/instance'

const useUpdateToken = (successCallback?: () => void) =>
  useMutation(authAPI.setRefreshToken, { onSuccess: successCallback })

export default useUpdateToken
