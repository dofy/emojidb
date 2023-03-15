'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const dataFormator_1 = __importDefault(require('./dataFormator'))
class dfBody extends dataFormator_1.default {
  get output () {
    return JSON.stringify(this.data, null, 2)
  }
}
exports.default = dfBody
// # sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGZKU09OLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9kZkpTT04udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrRUFBZ0M7QUFFaEMsTUFBTSxNQUFPLFNBQVEsc0JBQUU7SUFDckIsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRjtBQUVELGtCQUFlLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBERiBmcm9tICcuL2RhdGFGb3JtYXRvcic7XG5cbmNsYXNzIGRmQm9keSBleHRlbmRzIERGIHtcbiAgZ2V0IG91dHB1dCgpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLCBudWxsLCAyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZkJvZHk7XG4iXX0=
