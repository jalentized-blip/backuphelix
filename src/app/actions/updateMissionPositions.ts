'use server';

import fs from 'fs/promises';
import path from 'path';

export async function updateMissionPositions(
  positions: { x: number, y: number }[],
  vialData?: { x: number, y: number, rotate: number, scale: number }
) {
  try {
    const filePath = path.join(process.cwd(), 'src/components/MissionSection.tsx');
    let content = await fs.readFile(filePath, 'utf-8');

    // Update each card position
    for (let i = 0; i < positions.length; i++) {
      const markerStart = `/* CARD_${i + 1}_START */`;
      const markerEnd = `/* CARD_${i + 1}_END */`;
      const regex = new RegExp(`${escapeRegExp(markerStart)}([\\s\\S]*?)${escapeRegExp(markerEnd)}`);
      const newPosition = `${markerStart} { x: ${Math.round(positions[i].x)}, y: ${Math.round(positions[i].y)} } ${markerEnd}`;
      
      if (regex.test(content)) {
        content = content.replace(regex, newPosition);
      }
    }

    // Update vial data if provided
    if (vialData) {
      const markerStart = `/* VIAL_START */`;
      const markerEnd = `/* VIAL_END */`;
      const regex = new RegExp(`${escapeRegExp(markerStart)}([\\s\\S]*?)${escapeRegExp(markerEnd)}`);
      const newVialData = `${markerStart} { x: ${Math.round(vialData.x)}, y: ${Math.round(vialData.y)}, rotate: ${Math.round(vialData.rotate)}, scale: ${Number(vialData.scale.toFixed(2))} } ${markerEnd}`;
      
      if (regex.test(content)) {
        content = content.replace(regex, newVialData);
      }
    }

    await fs.writeFile(filePath, content, 'utf-8');
    return { success: true };
  } catch (error) {
    console.error('Failed to update mission positions:', error);
    return { success: false, error: 'File system error' };
  }
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
