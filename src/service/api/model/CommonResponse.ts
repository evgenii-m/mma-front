class CommonResponse<T> {
    data: T

    constructor(data: T) {
        this.data = data;
    }
}

export default CommonResponse