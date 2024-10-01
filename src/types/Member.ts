import { ContactDetail } from './ContactDetail';
import { MemberGroup } from './MemberGroup';
import { Organization } from './Organization';
import { UserCustomField } from './UserCustomField';

export type Member = {
  readonly id: number;
  contactDetails: ContactDetail;
  readonly org: Organization;
  email: string;
  emailOrUserName: string;
  readonly model: string;
  readonly _deleteAfterDate?: string;
  readonly _deletedBy?: number;
  readonly _profilePicture?: string;
  joinDate: string;
  resignationDate?: string;
  readonly declarationOfApplication?: string;
  readonly declarationOfResignation?: string;
  readonly declarationOfConsent?: string;
  membershipNumber: string;
  _paymentStartDate?: string;
  paymentAmount?: string;
  paymentIntervallMonths: number;
  useBalanceForMembershipFee: boolean;
  bulletinBoardNewPostNotification: boolean;
  readonly integrationDosbSport: readonly unknown[];
  readonly integrationDosbGender?: string;
  _isApplication: boolean;
  _relatedMember?: string;
  readonly sepaMandateFile?: string;
  memberGroups: readonly MemberGroup[];
  customFields: UserCustomField[];
};
