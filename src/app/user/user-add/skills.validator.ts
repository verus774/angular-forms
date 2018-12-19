import {FormArray} from '@angular/forms';

export function skillsValidator(control: FormArray): { [key: string]: boolean } | null {
  const isSomeSkillChecked = control.controls.some(skill => skill.value);

  if (!isSomeSkillChecked) {
    return {oneSkillRequired: true};
  }
  return null;
}
