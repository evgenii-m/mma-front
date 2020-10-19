
class Utils {
    static convertToDropdownOptions(items: any[]) {
        return items.map(type => {
            return {
                key: type,
                text: type,
                value: type
            }
        })
    }
}

export default Utils