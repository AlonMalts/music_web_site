# Firebase Music Videos Setup Guide

## Collection Structure

Create a collection called `musicVideos` in your Firebase Firestore database.

## Document Structure

Each document in the `musicVideos` collection should have the following fields:

```json
{
  "title": "Begin again (live Rimon 02.07)",
  "youtubeId": "dQw4w9WgXcQ",
  "description": "Live performance at Rimon School",
  "date": "Jul 2, 2024",
  "order": 1
}
```

## Field Descriptions

- **title** (string, required): The video title that will be displayed
- **youtubeId** (string, required): The YouTube video ID (the part after `v=` in YouTube URLs)
- **description** (string, optional): Video description (currently not displayed but stored for future use)
- **date** (string, optional): Video date (currently not displayed but stored for future use)
- **order** (number, optional): Display order (lower numbers appear first)

## How to Add Videos

1. Go to your Firebase Console
2. Navigate to Firestore Database
3. Create a new collection called `musicVideos`
4. Add documents with the structure above

## Example YouTube ID Extraction

For a YouTube URL like: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
The `youtubeId` would be: `dQw4w9WgXcQ`

## Testing

After adding videos to Firebase, refresh your website to see them appear in the Music Videos section.
