class PageableResponse<T> {
    page: number
    size: number
    totalSize: number
    data: T

    constructor(page: number, size: number, totalSize: number, data: T) {
        this.page = page;
        this.size = size;
        this.totalSize = totalSize;
        this.data = data;
    }
}

export default PageableResponse