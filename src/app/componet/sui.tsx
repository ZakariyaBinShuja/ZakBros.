import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export function PaginationDemo() {
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="http://localhost:3000/TV" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="http://localhost:3000/Action">Action</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="http://localhost:3000/Horror">Horror</PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="http://localhost:3000/War">War</PaginationLink>
          </PaginationItem>



          <PaginationItem>
            <PaginationLink href="http://localhost:3000/Family">Family</PaginationLink>
          </PaginationItem>



          
          <PaginationItem>
            <PaginationLink href="#" isActive>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
            
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }
  