import NcPageInfo from '../../types/common/NcPageInfo';
import NcListResponse from '../../types/common/NcListResponse';
import NcFormView from '../../types/NcFormView';

export default class FormView {
  public static list(
    pageInfo: NcPageInfo
  ): Promise<NcListResponse<NcFormView>> {
    return Promise.resolve(null);
  }
  public static create(data: NcFormView): Promise<NcFormView> {}
  public static update(id: string, filter: NcFormView): Promise<NcFormView> {}
  public static delete(id: string): Promise<void> {}
  public static rename(id: string, name: string): Promise<void> {}
}