const _listItems = [
]

export default {
  getListItems(cb) {
    () => cb(_listItems);
  },
}
