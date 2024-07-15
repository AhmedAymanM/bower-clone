import { useState, useEffect } from 'react'
import { getFormattedCount } from '@/utils/getFormattedCount'
import { cn, type ClassValue } from '@/utils/cn'
import { Button } from '@/components/ui/button'

type PaginationProps = {
  totalPages: number
  initialPage: number
  onPageChange?: (page: number) => void
  className?: ClassValue
}

export function Pagination({
  initialPage = 1,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)

  const onGetPreviousPage = () => setCurrentPage(currentPage - 1)
  const onGetNextPage = () => setCurrentPage(currentPage + 1)

  useEffect(() => {
    onPageChange?.(currentPage)
  }, [currentPage, onPageChange])

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        disabled={!currentPage || currentPage === 1}
        onClick={onGetPreviousPage}
      >
        Previous
      </Button>
      <span className="font-bold">
        {getFormattedCount(currentPage, 'standard')} /{' '}
        {getFormattedCount(totalPages, 'standard')}
      </span>
      <Button disabled={currentPage === totalPages} onClick={onGetNextPage}>
        Next
      </Button>
    </div>
  )
}
