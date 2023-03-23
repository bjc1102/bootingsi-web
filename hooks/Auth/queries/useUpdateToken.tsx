import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { authAPI } from 'lib/axios/instance'

const useUpdateToken = () => useMutation(authAPI.setRefreshToken)

export default useUpdateToken
