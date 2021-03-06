import { ChangeInfo, ChangeSet, ChangeType } from './ChangeInfo';
import { PackageInfo, PackageGroups } from './PackageInfo';
import { VersionGroupOptions } from './BeachballOptions';

export type BumpInfo = {
  changes: ChangeSet;
  packageInfos: { [pkgName: string]: PackageInfo };
  packageChangeTypes: { [pkgName: string]: ChangeInfo };
  packageGroups: PackageGroups;
  groupOptions: { [grp: string]: VersionGroupOptions };
  dependents: { [pkgName: string]: string[] };
  dependentChangeTypes: { [pkgName: string]: ChangeType };
  dependentChangeInfos: Array<ChangeInfo>;
  modifiedPackages: Set<string>;
  newPackages: Set<string>;
  scopedPackages: Set<string>;
};
