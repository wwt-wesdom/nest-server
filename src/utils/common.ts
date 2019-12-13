export interface ResData {
  result: any;
  other: object;
  message: string;
  code: string;
  success: boolean;
}

/**
 * 生成数据接口返回的数据
 *
 * @export
 * @param result
 * @param message
 * @param code
 * @param success
 * @param other
 * @returns
 */
export function createResData(result = null, code = '0', message = 'success', success = true, other = {}): ResData {
  return { result, message, code, success, other };
}
